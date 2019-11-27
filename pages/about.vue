<template>
  <div>
    <van-nav-bar title="关于" left-text left-arrow @click-left="navBack"></van-nav-bar>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  head() {
    return {
      title: "关于"
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
  created() {}
};
</script>
