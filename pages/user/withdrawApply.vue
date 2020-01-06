<template>
  <div>
    <van-nav-bar title="提现申请" left-text left-arrow @click-left="navBack"></van-nav-bar>
    <div>
      <van-cell-group class="pt-3 pb-3">
        <van-field v-model="amount" placeholder="请输入提现金额" label="提现金额" required />
      </van-cell-group>

      <div class="text-red-500 p-4">
        <span class="text-xl">{{errMsg }}</span>
      </div>

      <van-cell-group class="mt-6">
        <van-cell title="最大可提取额度">
          <template slot="default">
            <span class="text-red-500">￥ {{formatPrice(max)}}</span>
          </template>
        </van-cell>
        <van-cell title="分红可提余额">
          <template slot="default">
            <span class="text-red-500">￥ {{formatPrice(assets.balance)}}</span>
          </template>
        </van-cell>
        <van-cell title="提现额度限额">
          <template slot="default">
            <span class="text-red-500">￥ {{formatPrice(assets.withdraw)}}</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <div class="fixed bottom-0 w-full">
      <van-button type="danger" block @click="withdrawApply">提交</van-button>
      <van-number-keyboard safe-area-inset-bottom />
    </div>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  head() {
    return {
      title: "提现申请"
    };
  },
  data() {
    return {
      statusActive: 0,
      amount: "0.00",
      assets: {
        balance: 0,
        amount: 0
      },
      max: 0,
      errMsg: ""
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
    statusChange(name, title = "") {
      // this.statusActive = name;
      // this.listData.page = 1;
      // this.listData.list = [];
      // this.listData.count = 0;
      // this.listData.loading = true;
      // this.listData.finished = false;

      // this.listLoad();
      this.$router.replace("/user/withdraw?status=" + name);
    },
    async withdrawApply() {
      let amount = this.amount * 100;
      this.errMsg = "";
      console.log("/withdrawApply amount", amount);

      if (isNaN(amount) || amount == 0) {
        this.errMsg = "请输入正确的金额";
        return;
      }

      let max =
        this.assets.balance > this.assets.withdraw
          ? this.assets.withdraw
          : this.assets.balance;
      if (max <= 0) {
        this.errMsg = "可提取金额不足";
        return;
      }

      if (amount > max) {
        this.errMsg = "提取金额超过限制";
        return;
      }

      await this.withdrawApplySubmit();
    },
    async withdrawApplySubmit() {
      this.errMsg = "";
      let confirm = await this.$dialog.confirm({
        title: "确认",
        message: "提交提现申请？"
      });
      console.log("/withdrawApply confirm:", confirm);
      if (confirm === "confirm") {
        let amount = this.amount * 100;

        try {
          let ret = await apis.withdrawApply({ amount: amount });
          console.log("/withdrawApply confirm:", JSON.stringify(ret));
          if (ret.code == 0) {
            this.$toast.success("提交成功");
            // this.getUserAssets();
            this.statusChange(1);
          } else {
            throw new Error(ret.message);
          }
        } catch (err) {
          this.$toast.fail(err.message);
        }
      }
    },
    async getUserAssets() {
      let ret = await apis.getUserAssets();
      console.log("/getUserAssets ret:", ret);
      if (ret.code == 0) {
        this.assets.balance = ret.data.balance;
        this.assets.withdraw = ret.data.withdraw;
        this.max =
          this.assets.balance > this.assets.withdraw
            ? this.assets.withdraw
            : this.assets.balance;
      } else {
        this.assets.balance = 0;
        this.assets.withdraw = 0;
        this.max = 0;
      }

      return ret;
    }
  },
  created() {
    this.getUserAssets();
  }
};
</script>