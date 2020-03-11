<template>
  <div>
    <van-nav-bar title="售后记录" left-text left-arrow @click-left="navBack"></van-nav-bar>
    <van-pull-refresh v-model="listData.loading" @refresh="onRefresh">
      <div style="min-height:400px">
        <van-list
          v-model="listData.loading"
          :finished="listData.finished"
          finished-text="没有更多了"
          @load="listLoad"
          :error.sync="listData.error"
        >
          <van-cell v-for="item in listData.list" :key="item.id">
            <div class="p-2">
              <div class="border rounded-lg" @click="goToDetail(item)">
                <van-cell>
                  <!-- 使用 title 插槽来自定义标题 -->
                  <template slot="title">
                    <span class="custom-title">NO.{{ item.after_no }}</span>
                  </template>
                  <template slot="default">
                    <span v-if="item.status == 0">未通过</span>
                    <span v-if="item.status == 1">处理中</span>
                    <span v-if="item.status == 2">已完成</span>
                  </template>
                </van-cell>
                <div class="text-gray-500"></div>
                <van-card
                  :price="(item.orderItem.price / 100).toFixed(2)"
                  :desc="item.orderItem.desc"
                  :num="item.orderItem.num"
                >
                  <template slot="title">
                    <span class="text-2xl text-black-50">{{item.orderItem.name}}</span>
                  </template>
                  <template slot="thumb" style="height:60px">
                    <img
                      :src="item.orderItem.thumb || item.orderItem.cover"
                      alt
                      style="width:60px;height:60px"
                    />
                  </template>
                </van-card>
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
      title: "售后记录"
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
        let listRet = await apis.getAfterList(data);
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
    },
    onRefresh() {
      this.listData.page = 1;
      this.listData.count = 0;
      this.listData.list = [];
    },
    goToDetail(item) {
      this.$router.push("/after/apply?id=" + item.order_item_id);
    }
  },
  created() {
    this.listLoad();
  }
};
</script>
