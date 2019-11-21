<template>
  <div>
    <van-nav-bar
      title="支付"
      left-text
      :left-arrow="leftArrow"
      @click-left="navBack"
      @click-right="navHome"
      v-if="!navBarHide"
    >
      <van-icon name="home-o" slot="right" size="2rem" />
    </van-nav-bar>

    <!-- <template v-for="order in orders">
      <div class="m-8 bg-gray-100 rounded-lg">
        <div class="text-gray-600 p-4">NO.{{order.order_no}}</div>
        <template v-for="item in order.items">
          <van-card
            :title="item.name"
            :price="formatPrice(item.price)"
            :thumb="item.cover"
            :num="item.num"
            style="margin-top:0"
          />
        </template>
      </div>
    </template> -->
    <div class="p-8 text-center">
      <div class="text-xl text-gray-500">需支付金额</div>
      <div class="text-6xl text-red-600 mt-4 mb-8">￥ {{(amount / 100).toFixed(2)}}</div>
    </div>

    <van-cell
      title="选择支付方式"
      is-link
      arrow-direction="down"
      :value="payTypeText"
      @click="payTypeChoose"
    />

    <van-radio-group v-model="payMethod" v-if="payType == 1">
      <van-cell-group>
        <van-cell title="微信支付" clickable @click="payMethodSelect(1)">
          <van-radio slot="right-icon" :name="1" checked-color="#07c160" />
        </van-cell>
        <van-cell title="支付宝" clickable @click="payMethodSelect(2)">
          <van-radio slot="right-icon" :name="2" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>

    <van-action-sheet
      v-model="payTypeShow"
      :actions="payTypeActions"
      title="选择支付方式"
      @select="payTypeSelect"
    />

    <van-submit-bar
      :price="total"
      button-text="确认支付"
      @submit="onSubmit"
      :loading="submitLoading"
      :disabled="submitDisabled"
    >
      <span slot="tip"></span>
    </van-submit-bar>
  </div>
</template>
<script>
import utils from "@/assets/js/utils";
import apis from "@/assets/js/apis";
export default {
  head() {
    return {
      title: "支付"
    };
  },
  data() {
    return {
      navBarHide: false,
      leftArrow: false,
      total: 0,
      amount: 0,
      score: 0,
      submitLoading: false,
      submitDisabled: true,
      orders: [],
      orderIds: [],
      payType: 1,
      payTypeText: "",
      payTypeShow: false,
      payTypeActions: [
        { name: "线下支付" },
        { name: "在线支付", color: "#07c160" }
      ],
      payMethod: 0,
      outTradeNo: "",
      paymentId: 0
    };
  },
  methods: {
    ...utils,
    async onSubmit() {
      this.submitLoading = true;

      let orderIds = this.orderIds;
      let submitData = {
        order_ids: orderIds,
        total: this.total,
        amount: this.amount,
        score: this.score,
        pay_type: this.payType,
        pay_method: this.payMethod,
        balance: 0,
        coupon: 0,
        user_coupon_id: 0
      };

      if (this.payType > 0 && this.payMethod == 0) {
        this.$toast.fail("请选择支付方式");
        return;
      }

      console.log("/onSubmit data", submitData);
      try {
        let paymentRet = await apis.createPayment(submitData);
        if (paymentRet.code == 0) {
          // this.$toast.success("");
          console.log("/onSubmit paymentData:", paymentRet.data);
          let paymentData = paymentRet.data;

          if (paymentData.status == 1) {
            // 不需要继续支付
            this.$route.replace("/order/list?status=1");
          } else {
            this.outTradeNo = paymentData.out_trade_no;
            this.paymentId = paymentData.id;
            console.log("/onSubmit outTradeNo", this.outTradeNo);
            console.log("/onSubmit paymentId", this.paymentId);
            if (this.payMethod == 1) {
              // 微信支付
            } else {
              // 支付宝
              await this.alipaySubmit()
            }
          }
        } else {
          throw new Error(paymentRet.message);
        }
      } catch (err) {
        console.error(err);
        this.$toast.fail(err.message || err);
      }

      this.submitLoading = false;
    },
    async alipaySubmit() {
      try {
        let alipayRet = await apis.alipaySumbit({
          out_trade_no: this.outTradeNo,
          subject: '支付金额: ￥' + (this.amount / 100).toFixed(2),
          amount: this.amount
        })
        console.log('/alipaySubmit ret:', JSON.stringify(alipayRet, null , 2))
        if (alipayRet.code === 0) {
          let action = alipayRet.data.action
          console.log('/alipaySubmit action:' , action)
          location.href = action
          // return action
        }else {
          throw new Error(alipayRet.message || '调用支付宝失败')
        }
      } catch (err) {
        console.error(err.message)
        this.$toast.fail(err.message || '调用支付宝失败')
        return false
      }
      
    },
    async wxpaySubmit() {

    },
    navBack() {
      this.$router.go(-1);
    },
    navHome() {
      this.$router.replace("/list");
    },
    payTypeChoose() {
      return
      this.payTypeShow = true;
    },
    payTypeSelect(item, index) {
      console.log(item);
      console.log(index);
      this.payTypeText = item.name;
      this.payType = index;
      if (index == 0) {
        this.payMethod = 0;
      }
      this.payTypeShow = false;

      this.checkSubmitBtn();
    },
    payMethodSelect(val) {
      this.payMethod = val;
      this.checkSubmitBtn();
    },
    checkSubmitBtn() {
      if (this.payType == 0 || (this.payType == 1 && this.payMethod > 0)) {
        this.submitDisabled = false;
      } else {
        this.submitDisabled = true;
      }
    },
    failMessage(msg) {
      this.$dialog
        .alert({
          title: "提示",
          message: msg
        })
        .then(() => {
          // on close
          this.navHome();
        });
    }
  },
  async created() {
    // let from = this.$router.query.from || "";
    if (this.$route.query.from === "appTab") {
      this.navBarHide = true;
    }
    let orderIds = this.$route.query.orderIds || this.$route.query.orderId;
    orderIds = orderIds.split(",");
    if (orderIds.length === 0) {
      this.failMessage("获取订单信息错误");
      return;
    }
    this.orders = [];
    for (let index = 0; index < orderIds.length; index++) {
      let orderId = orderIds[index];
      this.orderIds.push(orderId);
      try {
        let orderRet = await apis.getOrder({ id: orderId });
        if (orderRet.code == 0) {
          this.orders.push(orderRet.data);
        } else {
          console.log(orderId, orderRet.message);
          throw new Error("获取订单信息错误");
        }
      } catch (err) {
        this.failMessage("获取订单信息错误!");
        return;
      }
    }

    console.log("/create orders", this.orders);
    let total = 0;
    let amount = 0;
    let score = 0;
    this.orders.forEach(order => {
      if (order.status != 0) {
        this.failMessage("已有订单处于不需要支付状态！");
      }
      total += order.total;
      score += order.score;
      amount += order.total - order.score;
    });
    this.total = total;
    this.amount = amount;
    this.score = score;
  }
};
</script>