<template>
  <div>
    <van-nav-bar title="订单详情" left-text left-arrow @click-left="navBack"></van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="m-8">
        <div class="text-gray-500">NO.{{order.order_no}}</div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  data() {
    return {
      isLoading: false,
      order: {}
    };
  },
  methods: {
    ...utils,
    navBack() {
      this.$router.go(-1);
    },
    async onRefresh() {
      this.order = {};
      await this.getDetail(this.$route.query.id);
      this.isLoading = false;
    },
    async getDetail(id) {
      try {
        let orderRet = await apis.getOrder({ id: id });
        if (orderRet.code == 0) {
          this.order = orderRet.data;
        } else {
          throw new Error(orderRet.message);
        }
      } catch (err) {
        this.$toast.fail(err.message || err);
      }
    }
  },
  async created() {
    await this.getDetail(this.$route.query.id);
  }
};
</script>