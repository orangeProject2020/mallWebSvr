<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text
      :left-arrow="leftArrow"
      @click-left="navBack"
      right-text="清空"
      @click-right="clearCart"
    />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <template v-if="items.length > 0">
        <div>
          <van-checkbox-group v-model="result" ref="checkboxGroup" @change="checkItem">
            <van-row v-for="item in items" :key="item.id" class="border-b">
              <van-col span="4" class="pl-8 pt-8">
                <van-checkbox :name="item.id"></van-checkbox>
              </van-col>
              <van-col span="20">
                <van-card
                  :title="item.title"
                  :desc="item.desc"
                  :price="formatPrice(item.price)"
                  :thumb="item.cover"
                >
                  <div slot="footer">
                    <van-stepper
                      :min="0"
                      v-model="item.num"
                      integer
                      @change="changeNum"
                      :name="JSON.stringify(item)"
                    />
                  </div>
                </van-card>
              </van-col>
            </van-row>
          </van-checkbox-group>
        </div>
      </template>
    </van-pull-refresh>

    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" :loading="submitLoading">
      <van-checkbox v-model="checkAllVal" class="pl-8" @click="checkAll">全选</van-checkbox>
      <span slot="tip"></span>
    </van-submit-bar>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
import uniCart from "@/assets/js/uniCart";

export default {
  data() {
    return {
      leftArrow: false,
      isLoading: false,
      items: [],
      result: [],
      checkAllVal: false,
      total: 0,
      submitLoading: false
    };
  },
  methods: {
    ...utils,
    async onRefresh() {
      try {
        await this.getCartItems();
        this.$toast.success("刷新成功");
      } catch (err) {
        this.$toast.fail("刷新失败，请稍后重试");
      }

      this.isLoading = false;
    },
    navBack() {
      this.$router.go(-1);
    },
    async getCartItems() {
      try {
        if (this.$store.state.isApp) {
          let items = uniCart.cartItems();
          console.log("/getCartItems", items);
          this.items = items;
        } else {
          let items = await apis.cartItems();
          console.log("/getCartItems", items);
          this.items = items;
        }

        this.getTotal();
      } catch (err) {
        this.$toast.fail("获取购物车信息失败，请稍后刷新重试");
      }
    },
    async clearCart() {
      try {
        if (this.$store.state.isApp) {
          let items = uniCart.cartClear();
          console.log("/getCartItems", items);
          this.items = items;
        } else {
          let items = await apis.cartClear();
          console.log("/getCartItems", items);
          this.items = items;
        }

        this.getTotal();
        this.$toast.success("清空购物车成功");
      } catch (err) {
        this.$toast.fail("获取购物车信息失败，请稍后刷新重试");
      }
    },
    async changeNum(num, detail) {
      console.log("changeNum:", num, detail);
      let item = JSON.parse(detail.name);
      let items = this.items;
      if (item.num > num) {
        num = item.num - num;
        if (this.$store.state.isApp) {
          items = uniCart.cartItemMinus(item, num);
        } else {
          items = await apis.cartItemMinus(item, num);
        }
      } else if (item.num < num) {
        num = num - item.num;
        if (this.$store.state.isApp) {
          items = uniCart.cartItemPlus(item, num);
        } else {
          items = await apis.cartItemPlus(item, num);
        }
      }

      this.items = items;
      this.getTotal();
    },
    checkItem() {
      console.log("/checkItem", this.result);
      if (this.result.length == this.items.length) {
        this.checkAllVal = true;
      } else {
        this.checkAllVal = false;
      }
      this.getTotal();
    },
    checkAll() {
      console.log("/checkAll", this.checkAllVal);
      if (!this.checkAllVal) {
        this.result = [];
        this.items.forEach(item => {
          this.result.push(item.id);
        });
      } else {
        this.result = [];
      }
      this.getTotal();
    },
    getTotal() {
      let total = 0;
      this.items.forEach(item => {
        if (this.result.indexOf(item.id) > -1) {
          total += item.price * item.num;
        }
      });

      this.total = total;
    },
    onSubmit() {
      if (this.result.length <= 0) {
        this.$toast("请选择待提交商品");
        return;
      }
      this.submitLoading = true;

      let items = this.items;
      let results = this.result;
      let business = {};
      items.forEach(item => {
        if (results.indexOf(item.id) > -1) {
          if (!business[item.business_id]) {
            business[item.business_id] = [];
          }
          business[item.business_id].push({
            goods_id: item.id,
            num: item.num
          });
        }
      });
      let orders = [];
      Object.keys(business).forEach(businessId => {
        orders.push({
          business_id: businessId,
          goods_items: business[businessId],
          score: 0, // TODO
          remark: "" //TODO
        });
      });

      let submitData = {
        orders: orders,
        address: {} // TODO
      };

      console.log("/onSubmit data", submitData);

      setTimeout(() => {
        this.submitLoading = false;
      }, 5000);
    }
  },
  async created() {
    document.addEventListener("UniAppJSBridgeReady", () => {
      console.log("UniAppJSBridgeReady .................");
      this.$store.commit("isAppSet", true);
    });

    let fromAppTab = this.$route.query.from === "appTab" ? true : false;
    this.leftArrow = fromAppTab ? false : true;
    await this.getCartItems();
  }
};
</script>