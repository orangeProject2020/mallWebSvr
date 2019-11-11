<template>
  <div class="pb-20">
    <van-nav-bar title="商品详情" left-text left-arrow @click-left="navBack" />

    <van-swipe class="goods-swipe" :autoplay="3000" :height="300">
      <van-swipe-item v-for="thumb in goods.pics" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title text-black text-2xl">{{ goods.title }}</div>
        <div class="goods-price text-red-500">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express text-gray-400">
        <van-col span="10" class="text-gray-400">运费：{{ goods.express }}</van-col>
        <van-col span="14" class="text-gray-400">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="viewDetail" />
    </van-cell-group>

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
              <van-stepper v-model="value" integer />
            </template>
          </van-cell>
        </van-cell-group>

        <div class="p-8">
          <van-button round type="danger" block>确定</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value: 1,
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        pics: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      }
    };
  },
  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    viewDetail() {},
    navBack() {
      this.$router.go(-1);
    },
    addCart() {
      this.show = true;
      // this.goCart();
    },
    goCart() {
      this.$router.push("/cart");
    },
    onClickIcon() {
      // Toast("点击图标");
    },
    goBuy() {
      // Toast("点击按钮");
      this.show = true;
    }
  }
};
</script>

