<template>
  <div></div>
</template>

<script>

export default {
  head() {
    return {
      title: "商城"
    };
  },
  data() {
    return {}
  },
  beforeCreate() {
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
      duration: 0
    });
  },
  async created() {
    
    document.addEventListener("UniAppJSBridgeReady", () => {
      console.log("UniAppJSBridgeReady .................");
      this.$store.commit("isAppSet", true);
    });

    let jump = this.$route.query.jump || "";
    if (jump) {
      // this.$router.push("/list?jump=" + jump);
      this.$router.push(decodeURIComponent(jump));
    } else {
      this.$router.push("/lists");
    }

  }
};
</script>
