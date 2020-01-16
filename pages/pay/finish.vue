<template>
  <div>
    <van-nav-bar title="支付成功" left-text left-arrow @click-left="navBack"></van-nav-bar>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  head() {
    return {
      title: "支付成功"
    };
  },
  data() {
    return {};
  },
  methods: {
    ...utils,
    navBack() {
      if (this.$store.state.isApp) {
        uni.navigateBack();
      } else {
        this.$router.go(-1);
      }
    }
  },
  created() {
    this.$dialog
      .confirm({
        title: "确认支付",
        message: "确认微信支付支付成功!"
      })
      .then(() => {
        // on confirm
        this.$router.replace("/order/list?status=1");
      })
      .catch(() => {
        // on cancel
        this.$router.replace("/order/list?status=0");
      });

    return;
  }
};
</script>
