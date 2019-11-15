<template>
  <div>
    <van-nav-bar
      title="订单详情"
      left-text
      left-arrow
      @click-left="navBack"
      v-if="!navBarHide"
    ></van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-card
        :price="(item.price / 100).toFixed(2)"
        :desc="item.desc"
        :title="item.name"
        :thumb="item.cover"
        v-for="item in order.items"
        :key="item.id"
      ></van-card>
      <van-cell title="订单编号" :value="order.order_no"></van-cell>
      <van-cell title="订单状态">
        <template slot="default">
          <span v-if="order.status == 0">待付款</span>
          <span v-if="order.status == 1">待发货</span>
          <span v-if="order.status == 2">待收货</span>
          <span v-if="order.status == 3">已完成</span>
        </template>
      </van-cell>
      <van-cell title="创建时间">
        <template slot="default"> {{ dateFormat(order.create_time) }}</template>
      </van-cell>
      <van-cell title="订单金额">
        <template slot="default">
          <span class="text-red-700"
            >￥{{ (order.total / 100).toFixed(2) }}</span
          ></template
        >
      </van-cell>
      <div class="p-4 text-right">
        <van-button plain hairline round type="default" v-if="order.status == 0"
          >取消</van-button
        >
        <van-button
          plain
          hairline
          round
          type="danger"
          v-if="order.status == 0"
          @click="goToPayment(order)"
          >支付</van-button
        >
        <van-button plain hairline round type="warning" v-if="order.status == 2"
          >确认收货</van-button
        >
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
      navBarHide: false,
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
    },
    goToPayment(item) {
      let url = "/payment?orderId=" + item.id;
      if (this.$store.state.isApp) {
        url += "&from=appTab";
      }
      this.$router.push(url);
    }
  },
  async created() {
    if (this.$route.query.from === "appTab") {
      this.navBarHide = true;
    }
    await this.getDetail(this.$route.query.id);
  }
};
</script>
