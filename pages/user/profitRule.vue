<template>
  <div>
    <van-nav-bar title="分红规则" left-text left-arrow @click-left="navBack"></van-nav-bar>
    <van-row class="p-6 text-lg">
      <van-col span="24">用户购买平台四类套餐产品，根据套餐产品设定的分红额度，规则如下：</van-col>
      <van-col span="24" class="mt-4">A类套餐，用户购买后，获得500平台共享分红额度;</van-col>
      <van-col span="24">B类套餐，用户购买后，获得1500平台共享分红额度;</van-col>
      <van-col span="24">C类套餐，用户购买后，获得6000平台共享分红额度;</van-col>
      <van-col span="24">D类套餐，用户购买后，获得15000平台共享分红额度;</van-col>
    </van-row>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";

export default {
  head() {
    return {
      title: "分红规则"
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
  async created() {}
};
</script>
