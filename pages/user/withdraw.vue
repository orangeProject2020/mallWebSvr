<template>
  <div>
    <van-nav-bar title="提现记录" left-text left-arrow @click-left="navBack"></van-nav-bar>
    <van-tabs v-model="statusActive" @click="statusChange">
      <van-tab title="未通过"></van-tab>
      <van-tab title="审核中"></van-tab>
      <van-tab title="已完成"></van-tab>
    </van-tabs>
    <div>
      <van-list
        v-model="listData.loading"
        :finished="listData.finished"
        finished-text="没有更多了"
        :error.sync="listData.error"
        error-text="请求失败，点击重新加载"
        @load="listLoad"
      >
        <van-cell v-for="item in listData.list" :key="item.id">
          <div class="p-3">
            <div v-if="item.status == 0 || item.status == -1">
              <div>
                提现金额:
                <span class="text-red-500">￥{{(item.amount/100).toFixed(2)}}</span>
              </div>
              <div>申请时间: {{ dateFormat(item.apply_time)}}</div>
              <div v-if="item.status == -1">审核未通过，理由: {{item.audit_reason}}</div>
            </div>
            <div v-if="item.status == 1">
              <div>
                提现金额:
                <span class="text-red-500">￥{{(item.amount/100).toFixed(2)}}</span>
              </div>
              <div>
                申请时间:
                <span class="text-gray-500">{{ dateFormat(item.apply_time)}}</span>
              </div>
            </div>
            <div v-if="item.status == 2">
              <div>
                提现金额:
                <span class="text-red-500">￥{{(item.amount/100).toFixed(2)}}</span>
              </div>
              <div>
                审核时间:
                <span class="text-gray-500">{{ dateFormat(item.audit_time)}}</span>
              </div>
            </div>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  head() {
    return {
      title: "提现记录"
    };
  },
  data() {
    return {
      statusActive: 1,
      listData: {
        list: [],
        count: 0,
        page: 1,
        limit: 2,
        loading: false,
        finished: false,
        error: false
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
    statusChange(name, title = "") {
      this.statusActive = name;
      this.listData.page = 1;
      this.listData.list = [];
      this.listData.count = 0;
      this.listData.loading = true;
      this.listData.finished = false;

      this.listLoad();
    },
    async listLoad() {
      let data = {
        page: this.listData.page,
        limit: this.listData.limit,
        status: this.statusActive
      };
      try {
        let ret = await apis.getWithdrawList(data);
        console.log("listLoad ret:", JSON.stringify(ret, null, 2));
        if (ret.code == 0) {
          let rows = ret.data.rows;
          this.listData.count = ret.data.count;
          if (rows.length) {
            rows.forEach(item => {
              this.listData.list.push(item);
            });
            this.listData.page += 1;
          } else {
            this.listData.finished = true;
          }
        } else {
          throw new Error(ret.message);
        }
      } catch (err) {
        this.$toast.fail(err.message || err);
        this.listData.error = true;
      }

      this.listData.loading = false;
    },

    async withdrawApply(item) {
      let confirm = await this.$dialog.confirm({
        title: "确认",
        message: "使用提现卡，提交提现申请？"
      });
      console.log("/withdrawApply confirm:", confirm);
      if (confirm === "confirm") {
        try {
          let ret = await apis.withdrawApply({ id: item.id });
          console.log("/withdrawApply confirm:", JSON.stringify(ret));
          if (ret.code == 0) {
            this.statusChange(1);
          } else {
            throw new Error(ret.message);
          }
        } catch (err) {
          this.$toast.fail(err.message);
        }
      }
    }
  },
  created() {
    let status = this.$route.query.status || "1";
    console.log("/created status", status);
    this.statusChange(parseInt(status));
  }
};
</script>