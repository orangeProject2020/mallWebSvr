<template>
  <div></div>
</template>

<script>
export default {
  // head() {
  //   return {
  //     title: "商城"
  //   };
  // },
  data() {
    return {};
  },
  beforeCreate() {
    this.$toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner",
      duration: 0
    });
  },
  async created() {
    document.addEventListener("UniAppJSBridgeReady", () => {
      console.log("created UniAppJSBridgeReady .................");
      this.$store.commit("isAppSet", true);

      let jump = this.$route.query.jump || "";
      console.log("/created jump:", jump);
      if (jump) {
        let jumpUrl = decodeURIComponent(jump);
        console.log("/created jumpUrl:", jumpUrl);
        this.$router.replace(jumpUrl);
      } else {
        this.$router.replace("/list");
      }

      this.$toast.clear();
    });
  }
};
</script>
