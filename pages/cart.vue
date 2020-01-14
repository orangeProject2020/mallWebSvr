<template>
  <div>
    <van-nav-bar title="购物车" left-text left-arrow @click-left="navBack" right-text="清空">
      <template slot="right">
        <van-icon name="delete" @click="clearCart" size="20" class="pl-4" />
        <van-icon name="wap-home-o" @click="navHome" size="20" class="pl-4" />
      </template>
    </van-nav-bar>
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

    <van-submit-bar :price="total" button-text="结算" @submit="onSubmit" :loading="submitLoading">
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
  head() {
    return {
      title: "购物车"
    };
  },
  data() {
    return {
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
    async onSubmit() {
      // 检测是否登录
      let retCheckAuth = await apis.authCheck();
      console.log(
        "/create retCheckAuth",
        JSON.stringify(retCheckAuth, null, 2)
      );
      if (retCheckAuth.code) {
        uni.navigateTo({
          url: "/pages/auth/login"
        });
        return;
      }

      if (this.result.length <= 0) {
        this.$toast("请选择待提交商品");
        return;
      }
      this.submitLoading = true;

      let items = this.items;
      let results = this.result;

      let orderData = [];
      items.forEach(item => {
        if (results.indexOf(item.id) > -1) {
          orderData.push(item);
        }
      });

      this.$store.commit("orderDatasSet", orderData);
      this.$router.push("/order/confirm");
      this.submitLoading = false;
      return;
    }
  },
  async created() {
    await this.getCartItems();
  }
};
</script>