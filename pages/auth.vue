<template>
  <div></div>
</template>

<script>
export default {
  methods: {},
  mounted() {
    let from = this.$route.query.from || "";
    console.log("/mounted .................");
    document.addEventListener("UniAppJSBridgeReady", () => {
      console.log("UniAppJSBridgeReady .................");
      this.$store.commit("isAppSet", true);
    });
    setTimeout(() => {
      uni.navigateTo({
        url: "/pages/auth/login?from=" + from
      });
    }, 0);
  }
};
</script>