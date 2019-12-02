<template>
  <div>
    <van-nav-bar title="确认订单" left-text left-arrow @click-left="navBack" @click-right="navHome">
      <van-icon name="wap-home-o" slot="right" size="2rem" />
    </van-nav-bar>

    <template v-for="(values, businessId) in businessData">
      <!-- <div>{{businessId }}</div> -->
      <template v-for="item in values">
        <van-card
          :desc="item.desc || item.description"
          :price="formatPrice(item.price)"
          :num="item.num"
        >
          <template slot="title">
            <span class="text-2xl text-black-50">{{item.title}}</span>
          </template>
          <template slot="thumb">
            <img :src="item.thumb || item.cover" alt style="width:80px;height:80px" />
          </template>
        </van-card>
      </template>
    </template>

    <van-cell-group class="mt-4" v-if="address.id > 0">
      <van-cell title="收货地址选择"></van-cell>
      <van-cell
        :title="address.name + ' ' + address.tel"
        icon="location-o"
        is-link
        value
        :label="address.address"
        class="mb-8"
        @click="goToAddress"
      ></van-cell>
    </van-cell-group>

    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" :loading="submitLoading">
      <span slot="tip"></span>
    </van-submit-bar>
  </div>
</template>
<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
import uniCart from "@/assets/js/uniCart";
export default {
  head() {
    return {
      title: "确认订单"
    };
  },
  data() {
    return {
      total: 0,
      business_id: [],
      itemsChecked: [],
      submitLoading: false,
      address: {
        id: 0
      }
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
    navHome() {
      if (this.$store.state.isApp) {
        uni.switchTab({
          url: "/pages/mall/index"
        });
      } else {
        this.$router.replace("/list");
      }
    },
    goToAddress() {
      this.$router.push("/address/list?jump=1");
    },
    async onSubmit() {
      this.submitLoading = true;

      let orders = [];
      let businessData = this.businessData;
      Object.keys(businessData).forEach(businessId => {
        let businessItems = businessData[businessId];
        let goodsItems = [];
        businessItems.forEach(item => {
          goodsItems.push({
            goods_id: item.id,
            num: item.num
          });
        });
        orders.push({
          business_id: businessId,
          goods_items: goodsItems,
          score: 0, // TODO
          remark: "" //TODO
        });
      });

      let submitData = {
        orders: orders,
        address: this.address
      };

      console.log("/onSubmit data", submitData);

      try {
        let createOrderRet = await apis.createOrder(submitData);
        console.log(
          "/onSubmit createOrderRet:",
          JSON.stringify(createOrderRet, null, 2)
        );
        if (createOrderRet.code === 0) {
          // this.submitLoading = false;
          // this.$toast.success("提交订单成功");
          let ordersData = createOrderRet.data.orders || [];
          let orderIds = [];
          if (ordersData.length) {
            ordersData.forEach(order => {
              orderIds.push(order.id);
            });
            this.submitSuccess();
            this.$router.replace("/payment?orderIds=" + orderIds.join(","));
          }
        } else {
          let retCode = createOrderRet.code;
          if (retCode == -100 || retCode == -101) {
            // 去登录
            if (this.$store.state.isApp) {
              uni.navigateTo({
                url: "/pages/auth/login?form=h5"
              });
            } else {
              this.$toast.fail("用户授权信息出现错误");
            }
            // this.$router.push("/auth?from=-order-confirm");
          } else {
            console.log("/onSubmit fail message:", createOrderRet.message);
            this.$toast.fail(`提交订单出现错误(${createOrderRet.message})!`);
          }
        }
      } catch (err) {
        console.log("/onSubmit err", err);
        this.$toast.fail("提交订单出现错误，请稍后重试");
      }

      this.submitLoading = false;
    },
    submitSuccess() {
      // 请空购物车
      let isApp = this.$store.state.isApp;
      let checkedItems = this.itemsChecked;
      console.log("/submitSuccess isApp", isApp);
      console.log("/submitSuccess checkedItems", checkedItems);
      for (let index = 0; index < checkedItems.length; index++) {
        let item = checkedItems[index];
        console.log("/submitSuccess item", item.id, item.num);
        if (!isApp) {
          apis.cartItemMinus(item, item.num);
        } else {
          uniCart.cartItemMinus(item, item.num);
        }
      }
    },
    async getAddress() {
      let item = this.$store.state.address;
      if (!item || !item.id) {
        let ret = await apis.addressList();
        console.log("/getAddress ret:", ret);
        if (ret.code == 0) {
          let list = ret.data.rows;
          if (list.length > 0) {
            item = list[0];
          }
        }
      }

      if (item && item.id) {
        this.address.id = item.id;
        this.address.name = item.name;
        this.address.tel = item.tel;
        this.address.postalCode = item.postalCode;
        this.address.province = item.province;
        this.address.city = item.city;
        this.address.county = item.county;
        this.address.areaCode = item.areaCode;
        this.address.address =
          item.province + item.city + item.county + item.addressDetail;
        console.log("/getAddress address:", this.address);
      }
    }
  },
  created() {
    let orderDatas = this.$store.state.orderDatas || [];
    console.log("/create orderDatas", orderDatas);
    if (orderDatas.length === 0) {
      this.$toast.fail("获取数据错误");
      setTimeout(() => {
        this.navBack();
      }, 2000);
    }
    let isBuy = this.$route.query.isBuy || 0;
    console.log("/create isBuy", isBuy);

    let itemsChecked = [];
    let businessData = [];
    let total = 0;
    orderDatas.forEach(item => {
      if (!businessData[item.business_id]) {
        businessData[item.business_id] = [];
      }
      businessData[item.business_id].push(item);
      itemsChecked.push(item);
      total += item.price * item.num;
    });

    this.businessData = businessData;
    if (!isBuy) {
      this.itemsChecked = itemsChecked;
    }

    this.total = total;

    this.getAddress();
  }
};
</script>
