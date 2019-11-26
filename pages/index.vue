<template>
  <div></div>
</template>

<script>
export default {
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
      this.$router.push("/list");
    }
  }
};
</script>