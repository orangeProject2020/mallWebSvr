<template>
  <div>
    <van-nav-bar title="订单详情" left-text left-arrow @click-left="navBack"></van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-card
        :price="(item.price / 100).toFixed(2)"
        :desc="item.desc"
        v-for="item in order.items"
        :key="item.id"
        :num="item.num"
      >
        <template slot="title">
          <span class="text-2xl text-black-50">{{item.name}}</span>
        </template>
        <template slot="thumb">
          <img :src="item.thumb || item.cover" alt style="width:60px;height:60px" />
        </template>
      </van-card>
      <van-cell title="订单编号" :value="order.order_no"></van-cell>
      <van-cell title="订单状态">
        <template slot="default">
          <span v-if="order.status == 0">待付款</span>
          <span v-if="order.status == 1">待发货</span>
          <span v-if="order.status == 2">待收货</span>
          <span v-if="order.status == 3">已完成</span>
          <span v-if="order.status == -1">已取消</span>
        </template>
      </van-cell>
      <van-cell title="创建时间">
        <template slot="default">{{ dateFormat(order.create_time) }}</template>
      </van-cell>
      <van-cell title="订单金额">
        <template slot="default">
          <span class="text-red-700">￥{{ (order.total / 100).toFixed(2) }}</span>
        </template>
      </van-cell>
      <van-cell-group title="收货地址">
        <van-cell
          :title="addressData.name"
          :value="addressData.tel"
          :label="addressData.addressDetail"
        ></van-cell>
      </van-cell-group>
      <van-cell-group v-if="order.status == 2" title="物流信息">
        <van-cell title="物流公司" :value="expressData.company || ''"></van-cell>
        <van-cell title="物流编号" :value="expressData.no || ''"></van-cell>
      </van-cell-group>
      <div class="p-4 text-right">
        <van-button
          plain
          hairline
          round
          type="default"
          size="small"
          v-if="order.status == 0"
          @click="orderCancelShow(order)"
        >取消</van-button>
        <van-button
          plain
          hairline
          round
          type="danger"
          size="small"
          v-if="order.status == 0"
          @click="goToPayment(order)"
        >支付</van-button>
        <van-button
          plain
          hairline
          round
          type="warning"
          size="small"
          v-if="order.status == 2"
          @click="orderFinish(order)"
        >确认收货</van-button>
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
      title: "订单详情"
    };
  },
  data() {
    return {
      isLoading: false,
      order: {},
      expressData: {},
      addressData: {},
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
      console.log("/navBack:", this.$store.state.isApp);
      if (this.$store.state.isApp) {
        uni.navigateBack();
      } else {
        this.$router.go(-1);
      }
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
    },
    async orderFinish(order) {
      try {
        let confirm = await this.$dialog.confirm({
          title: "确认？",
          message: "确认收货完成该订单"
        });

        if (confirm !== "confirm") {
          return;
        }
      } catch (err) {
        console.log("/orderComplete cancel");
        return;
      }

      let data = {
        id: order.id
      };

      try {
        let ret = await apis.finishOrder(data);
        console.log("/orderComplete ret:", ret);
        if (ret.code === 0) {
          this.$toast.success("确认订单完成成功");
          this.onRefresh();
        } else {
          throw new Error(ret.message);
        }
      } catch (err) {
        this.$toast.fail(err.message || "确认订单完成失败");
      }
    }
  },
  async created() {
    await this.getDetail(this.$route.query.id);

    this.expressData = this.order.express_info
      ? JSON.parse(this.order.express_info)
      : {};
    let address = this.order.address ? JSON.parse(this.order.address) : {};
    address.addressDetail =
      address.province +
      "/" +
      address.city +
      "/" +
      address.county +
      " " +
      address.address;
    this.addressData = address;
  }
};
</script>

<style lang="less">
.van-card__thumb {
  height: 60px !important;
}
.van-card__content {
  min-height: 60px !important;
}
</style>
