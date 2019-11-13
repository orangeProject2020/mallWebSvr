<template>
  <div>
    <van-nav-bar
      title="确认订单"
      left-text
      :left-arrow="leftArrow"
      @click-left="navBack"
      @click-right="navHome"
    >
      <van-icon name="home-o" slot="right" size="2rem" />
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftArrow: false
    };
  },
  methods: {
    navBack() {
      this.$router.go(-1);
    },
    navHome() {
      this.$router.replace("/list");
    }
  }
};
</script>