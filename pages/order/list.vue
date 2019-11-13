<template>
  <div>
    <van-nav-bar title="订单列表" left-text left-arrow @click-left="navBack"></van-nav-bar>
    <van-tabs v-model="statusActive" @click="statusChange">
      <van-tab title="待付款"></van-tab>
      <van-tab title="待发货"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="已完成"></van-tab>
    </van-tabs>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div style="min-height:400px">
        <van-list
          v-model="listLoading"
          :finished="listFinished"
          finished-text="没有更多了"
          :error.sync="listError"
          error-text="请求失败，点击重新加载"
          @load="listLoad"
        >
          <van-cell v-for="item in orders" :key="item.id" @click="goToDetail(item)">
            <div class="text-gray-500">NO.{{ item.order_no }}</div>
          </van-cell>
        </van-list>
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
      statusActive: 0,
      listLoading: false,
      listFinished: false,
      listError: false,
      orders: [],
      page: 1
    };
  },
  methods: {
    ...utils,
    navBack() {
      this.$router.go(-1);
    },
    async onRefresh() {
      this.orders = [];
      this.page = 1;
      this.listFinished = false;
      await this.listLoad();
      this.isLoading = false;
    },
    async statusChange(name, title) {
      console.log(name);
      this.orders = [];
      this.page = 1;
      this.listFinished = false;
      const toast = this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "加载中"
      });
      this.statusActive = name;

      await this.listLoad();
      this.$toast.clear();
    },
    async listLoad() {
      this.listLoading = true;

      let data = {};
      data.page = this.page;
      data.limit = 10;
      data.status = this.statusActive;
      console.log("/listLoad data", data);

      try {
        let orderRet = await apis.getOrderList(data);
        if (orderRet.code == 0) {
          let orders = orderRet.data.rows;
          if (orders.length) {
            orders.forEach(order => {
              this.orders.push(order);
            });
            this.page += 1;
          } else {
            this.listFinished = true;
          }
        } else {
          throw new Error(orderRet.message);
        }
      } catch (err) {
        this.$toast.fail(err.message || err);
        this.listError = true;
      }

      this.listLoading = false;
    },
    goToDetail(item) {
      this.$router.push("/order/detail?id=" + item.id);
    }
  }
};
</script>