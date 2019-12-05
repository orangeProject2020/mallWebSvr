<template>
  <div>
    <van-nav-bar title="公告消息" left-text left-arrow @click-left="navBack"></van-nav-bar>

    <van-list
      v-model="listData.loading"
      :finished="listData.finished"
      finished-text="没有更多了"
      @load="listLoad"
      :error.sync="listData.error"
    >
      <van-cell
        v-for="item in listData.list"
        :key="item.id"
        :is-link="item.type ? true : false"
        @click="msgItemClick(item)"
      >
        <template slot="title">
          <span
            class="bg-red-500"
            style="width:4px;height:4px;border-radius:4px;display:inline-block;vertical-align: middle;"
            v-if="item.status == 0"
          ></span>
          <span v-if="item.type == 0">用户消息:{{item.info}}</span>
          <span v-if="item.type == 1">公告消息:{{item.notice ? item.notice.title : '' }}</span>
        </template>
        <template slot="label">{{ dateFormat(item.create_time) }}</template>
        <template slot="default"></template>
      </van-cell>
    </van-list>

    <van-popup v-model="show">
      <div style="width:300px;" class="p-4">
        <div class="text-center text-2xl">{{notice.title}}</div>
        <div class="text-center mt-4 text-xl">{{notice.info}}</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";

export default {
  head() {
    return {
      title: "用户消息"
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
      },
      show: false,
      notice: {
        title: "",
        info: ""
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
        let listRet = await apis.getUserMsgList(data);
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
    async msgItemClick(item) {
      if (item.type == 1) {
        let notice = item.notice;
        if (notice) {
          this.notice.title = notice.title;
          this.notice.info = notice.info;
          this.show = true;
        }
      }

      if (item.status == 0) {
        let ret = await apis.userMsgRead({ id: item.id, status: 1 });
        console.log("/msgItemClick ret:", ret);
        if (ret.code == 0) {
          item.status = 1;
        }
      }
    }
  },
  async created() {}
};
</script>
