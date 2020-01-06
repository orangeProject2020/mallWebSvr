<template>
  <div class="pb-20">
    <van-nav-bar title="商品详情" left-text left-arrow @click-left="navBack" @click-right="navHome">
      <van-icon name="wap-home-o" slot="right" size="20" />
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-image :src="goods.cover" v-if="goods.cover">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
      <div v-else style="height:750rpx;background:#fafafa;"></div>

      <van-cell-group>
        <van-cell>
          <div class="goods-title text-black text-2xl">{{ goods.title }}</div>
          <div class="goods-price">
            <span class="text-red-500">￥{{ formatPrice(goods.price) }}</span>
            <span class="text-gray-400 line-through">￥{{ (goods.price_market / 100).toFixed(2) }}</span>
          </div>
        </van-cell>
        <van-cell class="goods-express text-gray-400">
          <!-- <van-col span="10" class="text-gray-400">运费：</van-col> -->
          <van-col span="14" class="text-gray-400">剩余：{{ goods.stock }}</van-col>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell>
          <van-col span="24" class="text-gray-600">{{ goods.description }}</van-col>
        </van-cell>
        <van-cell>
          <van-col span="24">
            <van-image
              :src="pic"
              v-for="pic in goods.pics"
              style="width:100%;margin-top:0;margin-bottom:0;display:block;"
            >
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </van-col>
        </van-cell>
      </van-cell-group>
    </van-pull-refresh>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addCart"
        v-if="goods.package_level == 0"
      />
      <van-goods-action-button type="danger" text="立即购买" @click="goBuy" />
    </van-goods-action>

    <van-popup v-model="show" closeable close-icon="close" position="bottom" round class="pt-8">
      <div class="mt-8">
        <van-cell-group>
          <van-cell title="购买数量">
            <template slot="default">
              <van-stepper v-model="num" integer :max="buyCount" />
            </template>
          </van-cell>
        </van-cell-group>

        <div class="p-8">
          <van-button
            round
            color="linear-gradient(to right, #ff6034, #ee0a24)"
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
import uniCart from "@/assets/js/uniCart";
export default {
  head() {
    return {
      title: "商品详情"
    };
  },
  data() {
    return {
      isLoading: false,
      show: false,
      actionType: 0,
      num: 1,
      goods: {
        title: "商品名称",
        price: 0,
        price_market: 0,
        cover: "",
        stock: "",
        express: "免运费",
        pics: []
      },
      buyCount: ""
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
    navBack() {
      if (this.$store.state.isApp) {
        uni.navigateBack();
      } else {
        this.$router.go(-1);
      }
    },
    navHome() {
      if (this.$store.state.isApp) {
        uni.switchTab({
          url: "/pages/mall/index"
        });
      } else {
        this.$router.replace("/list");
      }
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
          if (this.$store.state.isApp) {
            uniCart.cartItemPlus(this.goods, this.num);
          } else {
            await apis.cartItemPlus(this.goods, this.num);
          }
        } catch (err) {
          console.log(err);
          this.$toast.fail("添加购物车失败，请稍后刷新重试");
          return false;
        }
        this.show = false;
        this.goCart();
      } else if (this.actionType == 2) {
        // 立即购买,直接下订单
        let orderData = [
          {
            ...this.goods,
            num: this.num
          }
        ];

        this.$store.commit("orderDatasSet", orderData);
        // 判断是否登录

        this.$router.push("/order/confirm?isBuy=1");
      }
    },
    goCart() {
      console.log("/goCart isApp:", this.$store.state.isApp);
      this.$router.push("/cart?from=" + this.$route.query.from);
    },
    onClickIcon() {
      // Toast("点击图标");
      // location.href = "tel:18676669410";
      console.log("/phoneNumber", process.env.phoneNumber);
      plus.device.dial(process.env.phoneNumber, true);
    },

    async getGoodsInfo(id) {
      // 获取商品信息
      let goodsRet = await axios.post("/api/mall/goods/detail", { id: id });
      if (goodsRet.code === 0) {
        this.goods = goodsRet.data;
        if (this.goods.package_level > 0) {
          this.goods.buy_limit = 1;
          this.buyCount = 1;
        } else {
          this.buyCount = this.goods.stock == -1 ? 10000 : this.goods.stock;
        }

        this.goods.pics = goodsRet.data.pics
          ? goodsRet.data.pics.split(",")
          : [];
      } else {
        this.$toast.fail("获取商品信息失败");
      }
      return goodsRet;
    }
  },
  async created() {
    let id = this.$route.query.id;
    console.log("/created id", id);
    let goodsRet = await this.getGoodsInfo(id);
    if (goodsRet.code !== 0) {
      // this.$router.go(-1);
      // this.$toast.fail("获取商品信息错误");
      setTimeout(() => {
        this.navBack();
      }, 1000);

      // 获取用户信息错误
    } else if (goodsRet.data.status != 1) {
      this.$toast.fail("商品已下架");
      setTimeout(() => {
        this.navBack();
      }, 1000);
    }
  }
};
</script>

