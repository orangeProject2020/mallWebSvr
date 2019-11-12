<template>
  <div class="pb-20">
    <van-nav-bar title="商品详情" left-text left-arrow @click-left="navBack" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-image :src="goods.cover">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>

      <van-cell-group>
        <van-cell>
          <div class="goods-title text-black text-2xl">{{ goods.title }}</div>
          <div class="goods-price">
            <span class="text-red-500">{{ formatPrice(goods.price) }}</span>
            <span class="text-gray-400 line-through">{{ formatPrice(goods.price) }}</span>
          </div>
        </van-cell>
        <van-cell class="goods-express text-gray-400">
          <van-col span="10" class="text-gray-400">运费：</van-col>
          <van-col span="14" class="text-gray-400">剩余：{{ goods.stock }}</van-col>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell>
          <van-col span="24" class="text-gray-600">{{ goods.description }}</van-col>
        </van-cell>
      </van-cell-group>
    </van-pull-refresh>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="goBuy" />
    </van-goods-action>

    <van-popup v-model="show" closeable close-icon="close" position="bottom" round class="pt-8">
      <div class="mt-8">
        <van-cell-group>
          <van-cell title="购买数量">
            <template slot="default">
              <van-stepper v-model="num" integer />
            </template>
          </van-cell>
        </van-cell-group>

        <div class="p-8">
          <van-button
            round
            color="linear-gradient(to right, #ff8917, #ff6034)"
            block
            @click="doAction"
          >确定</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import axios from "@/server/axios";
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  data() {
    return {
      isLoading: false,
      show: false,
      actionType: 0,
      num: 1,
      goods: {
        title: "",
        price: 0,
        cover: "",
        stock: "",
        express: "免运费",
        pics: []
      }
    };
  },
  methods: {
    ...utils,
    async onRefresh() {
      try {
        await this.getGoodsInfo(this.$route.query.id);
        this.$toast.success("刷新成功");
      } catch (err) {
        this.$toast.fail("刷新失败，请稍后重试");
      }

      this.isLoading = false;
    },
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    navBack() {
      this.$router.go(-1);
    },
    addCart() {
      if (!this.goods.id) {
        this.$toast.fail("商品信息获取失败，请稍后刷新重试");
        return;
      }
      this.actionType = 1;
      this.show = true;
    },
    goBuy() {
      if (!this.goods.id) {
        this.$toast.fail("商品信息获取失败，请稍后刷新重试");
        return;
      }
      this.actionType = 2;
      this.show = true;
    },
    async doAction() {
      if (this.actionType == 1) {
        // 添加购物车
        try {
          await apis.cartItemPlus(this.goods, this.num);
        } catch (err) {
          console.log(err);
          this.$toast.fail("添加购物车失败，请稍后刷新重试");
          return false;
        }
        this.show = false;
        this.goCart();
      } else if (this.actionType == 2) {
        // 立即购买
      }
    },
    goCart() {
      console.log("/goCart isApp:", this.$store.state.isApp);
      // if (this.$store.state.isApp) {
      //   uni.switchTab({
      //     url: "/pages/cart/index"
      //   });
      // } else {
      //   this.$router.push("/cart");
      // }
      this.$router.push("/cart");
    },
    onClickIcon() {
      // Toast("点击图标");
    },

    async getGoodsInfo(id) {
      // 获取商品信息
      let goodsRet = await axios.post("/api/mall/goods/detail", { id: id });
      if (goodsRet.code === 0) {
        this.goods = goodsRet.data;
      } else {
        this.$toast.fail("获取商品信息失败");
      }
      return goodsRet;
    }
  },
  async created() {
    document.addEventListener("UniAppJSBridgeReady", () => {
      console.log("UniAppJSBridgeReady .................");
      this.$store.commit("isAppSet", true);
    });

    let id = this.$route.query.id;
    console.log("/fetch id", id);
    let goodsRet = await this.getGoodsInfo(id);
    if (goodsRet.code !== 0) {
      this.$router.go(-1);
    }
  }
};
</script>

