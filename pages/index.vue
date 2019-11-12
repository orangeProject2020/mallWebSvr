<template>
  <div>首页</div>
</template>

<script>
export default {
  async created() {
    document.addEventListener("UniAppJSBridgeReady", () => {
      console.log("UniAppJSBridgeReady .................");
      this.$store.commit("isAppSet", true);
    });

    this.$router.push("/list");
  }
};
</script>