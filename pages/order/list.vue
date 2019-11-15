<template>
  <div>
    <van-nav-bar title="订单列表" left-text left-arrow @click-left="navBack" v-if="!navBarHide"></van-nav-bar>
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
          <van-cell v-for="order in orders" :key="order.id">
            <div class="p-2">
              <div class="border rounded-lg">
                <van-cell @click="goToDetail(order)">
                  <!-- 使用 title 插槽来自定义标题 -->
                  <template slot="title">
                    <span class="custom-title">NO.{{ order.order_no }}</span>
                  </template>
                  <template slot="default"></template>
                </van-cell>
                <div class="text-gray-500"></div>
                <van-card
                  :price="(item.price/100).toFixed(2)"
                  :desc="item.desc"
                  :title="item.name"
                  :thumb="item.cover"
                  @click="goToDetail(order)"
                  v-for="item in order.items"
                  :key="item.id"
                ></van-card>
                <van-cell>
                  <!-- 使用 title 插槽来自定义标题 -->
                  <template slot="title">
                    <span>总计:</span>
                    <span class="text-red-700">￥{{(order.total/100).toFixed(2)}}</span>
                  </template>
                  <template slot="default">
                    <van-button
                      plain
                      hairline
                      round
                      type="default"
                      size="mini"
                      v-if="order.status == 0"
                    >取消</van-button>
                    <van-button
                      plain
                      hairline
                      round
                      type="danger"
                      size="mini"
                      v-if="order.status == 0"
                      @click="goToPayment(order)"
                    >支付</van-button>

                    <van-button
                      plain
                      hairline
                      round
                      type="warning"
                      size="mini"
                      v-if="order.status == 2"
                    >确认收货</van-button>
                  </template>
                </van-cell>
              </div>
            </div>
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
  head() {
    return {
      title: "我的订单"
    };
  },
  data() {
    return {
      navBarHide: false,
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
      this.isLoading = true;
      this.orders = [];
      this.page = 1;
      this.listFinished = false;
      this.listLoading = true;
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
      data.limit = 5;
      data.status = this.statusActive;
      console.log("/listLoad data", data);

      try {
        let orderRet = await apis.getOrderList(data);
        console.log("listLoad ret:", JSON.stringify(orderRet, null, 2));
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
      let url = "/order/detail?id=" + item.id;
      if (this.$store.state.isApp) {
        url += "&from=appTab";
      }
      this.$router.push(url);
    },
    goToPayment(item) {
      let url = "/payment?orderId=" + item.id;
      if (this.$store.state.isApp) {
        url += "&from=appTab";
      }
      this.$router.push(url);
    }
  },
  created() {
    if (this.$route.query.from === "appTab") {
      this.navBarHide = true;
    }
  }
};
</script>