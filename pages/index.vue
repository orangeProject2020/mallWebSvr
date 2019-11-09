<template>
  <div>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      @click="goToDetail"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </div>
    </van-card>
  </div>
</template>
<script>
export default {
  methods: {
    goToDetail() {
      this.$router.push("/goods/detail");
    }
  }
};
</script>