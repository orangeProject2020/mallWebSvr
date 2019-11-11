<template>
  <div>
    <van-nav-bar title="购物车" left-text left-arrow @click-left="navBack" />
  </div>
</template>

<script>
export default {
  methods: {
    navBack() {
      this.$router.go(-1);
    }
  }
};
</script>