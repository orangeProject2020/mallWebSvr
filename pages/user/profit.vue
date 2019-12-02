<template>
  <div>
    <van-nav-bar title="收益记录" left-text left-arrow @click-left="navBack"></van-nav-bar>

    <van-list
      v-model="listData.loading"
      :finished="listData.finished"
      finished-text="没有更多了"
      @load="listLoad"
      :error.sync="listData.error"
    >
      <van-cell v-for="item in listData.list" :key="item.id">
        <template slot="title">
          <span v-if="item.type == 1">购买套餐分红:</span>
          <span v-if="item.type == 2">平台每日分红:</span>
          <span class="text-red-500">￥{{(item.amount / 100).toFixed(2)}}</span>
        </template>
        <template slot="label">日期:{{ item.date }}</template>
        <template slot="default">
          <span v-if="item.status == 0" class="text-red-500">未结算</span>
          <span v-if="item.status == 1">已结算</span>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";

export default {
  head() {
    return {
      title: "收益记录"
    };
  },
  data() {
    return {
      listData: {
        page: 1,
        count: 0,
        list: [],
        limit: 10,
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
    async listLoad() {
      this.listData.loading = true;
      this.listData.finished = false;
      let data = {
        page: this.listData.page,
        limit: this.listData.limit
      };

      try {
        let listRet = await apis.getProfitList(data);
        console.log("/listData listRet:", listRet);
        if (listRet.code == 0) {
          this.listData.page += 1;
          this.listData.count = listRet.data.count;
          listRet.data.rows.forEach(item => {
            this.listData.list.push(item);
          });
          if (listRet.data.rows.length < this.listData.limit) {
            this.listData.finished = true;
          }
        } else {
          throw new Error(listRet.message);
        }
      } catch (err) {
        this.listData.error = true;
        this.$toast.fail(err.message || "网络错误，请稍后重试");
      }

      this.listData.loading = false;
    }
  },
  async created() {}
};
</script>
