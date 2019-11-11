<template>
  <div>
    <van-nav-bar title="商品详情" left-text left-arrow @click-left="navBack" />

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="goBuy" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  methods: {
    navBack() {
      this.$router.go(-1);
    },
    addCart() {
      this.goCart();
    },
    goCart() {
      this.$router.push("/cart");
    },
    onClickIcon() {
      // Toast("点击图标");
    },
    goBuy() {
      // Toast("点击按钮");
    }
  }
};
</script>