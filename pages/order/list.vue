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
                  :price="(item.price / 100).toFixed(2)"
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
                    <span class="text-red-700">￥{{ (order.total / 100).toFixed(2) }}</span>
                  </template>
                  <template slot="default">
                    <van-button
                      plain
                      hairline
                      round
                      type="default"
                      size="mini"
                      v-if="order.status == 0"
                      @click="orderCancelShow(order)"
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

    <van-action-sheet v-model="orderCancel.show" title="取消订单">
      <div class="p-4">
        <div class="text-center text-xl">取消后无法恢复</div>
        <div class="text-2xl text-gray-600 mt-4">请选择取消理由</div>
        <div class="mt-4">
          <van-radio-group v-model="orderCancel.reason">
            <van-cell-group>
              <van-cell :title="item" clickable v-for="item in orderCancelReasons" :key="item">
                <van-radio slot="right-icon" :name="item" checked-color="#07c160" />
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
        <div class>
          <van-goods-action class="p-4" style="position: unset;">
            <van-goods-action-button type="warning" text="暂不取消" @click="orderCancelClose" />
            <van-goods-action-button type="danger" text="确认取消" @click="orderCancelSubmit" />
          </van-goods-action>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
import config from "@/config/index";
export default {
  head() {
    return {
      title: "我的订单"
    };
  },
  data() {
    return {
      isLoading: false,
      statusActive: 0,
      listLoading: false,
      listFinished: false,
      listError: false,
      orders: [],
      page: 1,
      orderCancel: {
        show: false,
        reason: "",
        id: 0
      },
      orderCancelReasons: config.cancel_reasons
    };
  },
  methods: {
    ...utils,
    navBack() {
      if (this.$store.state.isApp) {
        uni.navigateBack();
      } else {
        this.$router.go(-1);
      }
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
    async statusChange(name, title = "") {
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
        console.log("listLoad ret:", JSON.stringify(orderRet));
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
      this.$router.push(url);
    },
    goToPayment(item) {
      let url = "/payment?orderId=" + item.id;
      this.$router.push(url);
    },
    orderCancelShow(order) {
      this.orderCancel.show = true;
      this.orderCancel.id = order.id;
      this.orderCancel.reason = "";
    },
    orderCancelClose() {
      this.orderCancel.show = false;
    },
    async orderCancelSubmit() {
      let submitData = {};
      submitData.id = this.orderCancel.id;
      submitData.cancel_reason = this.orderCancel.reason;

      console.log(
        "/orderCancelSubmit submitData:",
        JSON.stringify(submitData, null, 2)
      );
      try {
        let cancelRet = await apis.cancelOrder(submitData);
        console.log(
          "/orderCancelSubmit cancelRet:",
          JSON.stringify(cancelRet, null, 2)
        );
        if (cancelRet.code == 0) {
          this.$toast.success("取消订单成功");
          this.onRefresh();
          this.orderCancel.show = false;
        } else {
          throw new Error(cancelRet.message);
        }
      } catch (err) {
        // console.log(err);
        this.$toast.fail(err.message || "取消失败");
      }
    }
  },
  created() {
    let status = this.$route.query.status || "0";
    // this.statusActive = status;
    console.log("/created status", status);
    this.statusChange(parseInt(status));
  }
};
</script>
