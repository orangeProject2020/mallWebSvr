<template>
  <div>
    <van-nav-bar title="用户协议" left-text left-arrow @click-left="navBack" v-if="!navBarHide"></van-nav-bar>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  head() {
    return {
      title: "用户协议"
    };
  },
  data() {
    return {
      navBarHide: false
    };
  },
  methods: {
    ...utils,
    navBack() {
      this.$router.go(-1);
    }
  },
  created() {
    if (this.$route.query.from === "appTab") {
      this.navBarHide = true;
    }
  }
};
</script>
