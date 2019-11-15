<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
// import "@vant/touch-emulator";
export default {
  async beforeCreate() {
    console.log("beforeCreate .................");
    document.addEventListener("UniAppJSBridgeReady", () => {
      console.log("UniAppJSBridgeReady .................");
      this.$store.commit("isAppSet", true);
    });
  },
  created() {
    console.log("default created .................");
    // document.addEventListener("UniAppJSBridgeReady", () => {
    //   console.log("UniAppJSBridgeReady .................");
    //   this.$store.commit("isAppSet", true);
    // });
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
