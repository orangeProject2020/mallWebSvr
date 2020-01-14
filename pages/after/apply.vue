<template>
  <div>
    <van-nav-bar title="售后申请" left-text left-arrow @click-left="navBack"></van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-card
        :price="(detail.order_item.price / 100).toFixed(2)"
        :desc="detail.order_item.desc"
        :key="detail.order_item.id"
        :num="detail.order_item.num"
        v-if="detail.order_item"
      >
        <template slot="title">
          <span class="text-2xl text-black-50">{{detail.order_item.name}}</span>
        </template>
        <template slot="thumb">
          <img
            :src="detail.order_item.thumb || detail.order_item.cover"
            alt
            style="width:60px;height:60px"
          />
        </template>
      </van-card>

      <van-cell-group v-if="detail.order_item">
        <van-cell title="订单金额">
          <template solt="default">
            <span class="text-red-500">￥{{formatPrice(detail.order_item.total)}}</span>
          </template>
        </van-cell>
        <van-cell title="订单创建时间">
          <template solt="default">{{dateFormat(detail.order_item.create_time)}}</template>
        </van-cell>
        <van-cell title="订单状态">
          <template solt="default">
            <span v-if="detail.order_item.status == 0">待付款</span>
            <span v-if="detail.order_item.status == 1">待发货</span>
            <span v-if="detail.order_item.status == 2">待收货</span>
            <span v-if="detail.order_item.status == 3">已完成</span>
            <span v-if="detail.order_item.status == -1">已取消</span>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group v-if="!detail.after.id">
        <van-cell title="售后类型" is-link @click="selectTypeClick">
          <template slot="default" v-if="detail.after.type">
            <span>{{afterTypeText}}</span>
          </template>
        </van-cell>
        <van-cell title="选择退换货理由" is-link @click="selectReasonClick">
          <template slot="default" v-if="detail.after.reason">{{detail.after.reason}}</template>
        </van-cell>
        <van-cell title="上传图片">
          <template slot="label">
            <van-uploader
              v-model="fileList"
              :max-count="5"
              :before-read="uploadBeforeRead"
              :after-read="uploadAfterRead"
              :max-size="2048000"
            />
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group v-if="detail.after.id">
        <van-cell title="售后类型">
          <template slot="default" v-if="detail.after.type">
            <span>{{afterTypeText}}</span>
          </template>
        </van-cell>
        <van-cell title="退换货理由">
          <template slot="default" v-if="detail.after.reason">{{detail.after.reason}}</template>
        </van-cell>
        <van-cell title="图片">
          <template slot="label"></template>
        </van-cell>
        <van-cell title="售后单号">
          <template slot="default">{{detail.after.after_no}}</template>
        </van-cell>
        <van-cell title="提交时间">
          <template slot="default">{{dateFormat(detail.after.create_time)}}</template>
        </van-cell>
        <van-cell title="状态">
          <template slot="default">
            <span v-if="detail.after.status == 0">未通过</span>
            <span v-if="detail.after.status == 1">处理中</span>
            <span v-if="detail.after.status == 2">已完成</span>
          </template>
        </van-cell>
      </van-cell-group>

      <van-row v-if="!detail.after.id ">
        <van-cell span="24">{{ titleMsg }}</van-cell>

        <van-cell span="24" v-if="applyCan">
          <van-button round type="danger" plain block @click="applySubmit">提交</van-button>
        </van-cell>
      </van-row>
    </van-pull-refresh>

    <van-action-sheet
      v-model="selectTypeData.show"
      :actions="selectTypeData.actions"
      @select="selectTypeAction"
    />
    <van-action-sheet
      v-model="selectReasonData.show"
      :actions="selectReasonData.actions"
      @select="selectReasonAction"
    />
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  head() {
    return {
      title: "售后申请"
    };
  },
  data() {
    return {
      detail: {
        order_item: null,
        after: {}
      },
      orderItemId: 0,
      isLoading: false,
      afterTypeText: "",
      selectTypeData: {
        show: false,
        actions: [{ name: "退货", val: 1 }, { name: "换货", val: 2 }]
      },
      selectReasonData: {
        show: false,
        actions: [
          { name: "质量问题" },
          { name: "购物错误" },
          { name: "货物破损" },
          { name: "功能缺失或故障" },
          {
            name: "其他原因"
          }
        ]
      },
      fileList: [],
      fileTypeLimit: ["image/jpeg", "image/png"],
      applySumitBtn: {
        disabled: false
      },
      applyCan: true,

      titleMsg: ""
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
    getDeadline() {
      let now = parseInt(Date.now() / 1000);
      let afterTimeLimit = now + 7 * 24 * 3600;
      let closeTime = this.detail.order_item.close_time;
      // this.deadline = closeTime;

      if (now > closeTime && now < afterTimeLimit) {
        // 可申请换货
        this.titleMsg = "超过售后退货时间，可申请换货";
        this.selectTypeData.actions = [
          { name: "退货", val: 1, disabled: true },
          { name: "换货", val: 2 }
        ];
      } else if (now > afterTimeLimit) {
        this.titleMsg = "超过售后时间，不可申请退换货";
        this.applyCan = false;
      }
    },
    async getData() {
      try {
        this.loading = true;
        let ret = await apis.getAfterInfo({ id: this.orderItemId });
        if (ret.code === 0) {
          this.detail.order_item = ret.data.order_item || null;
          this.detail.after = ret.data.after || {};

          if (this.detail.after.id) {
            this.afterTypeText = this.selectTypeData.actions[
              ret.data.after.type
            ].name;

            this.getDeadline();
          }
        } else {
          throw new Error(ret.message);
        }
      } catch (err) {
        this.$toast.fail(err.message || "获取数据失败，稍后重试");
      }

      this.loading = false;
    },
    onRefresh() {
      this.getData();
    },
    selectTypeClick() {
      this.afterTypeText = "";
      this.selectTypeData.show = true;
    },
    selectTypeAction(item) {
      console.log(item);
      this.detail.after.type = item.val;
      this.afterTypeText = item.name;
      this.selectTypeData.show = false;
    },
    selectReasonClick() {
      this.selectReasonData.show = true;
    },
    selectReasonAction(item) {
      this.detail.after.reason = item.name;
      this.selectReasonData.show = false;
    },
    uploadBeforeRead(file) {
      // console.log("/uploadBeforeRead file:", file);
      // if (this.fileTypeLimit.indexOf(file.type) < 0) {
      //   this.$toast("上传图片格式不正确");
      //   return false;
      // }

      return true;
    },
    async uploadAfterRead(file) {
      console.log("/uploadAfterRead file:", file);
      console.log("/uploadAfterRead fileList:", this.fileList);
      // return;
      let data = { name: file.file.name, content: file.content };
      try {
        let ret = await apis.upload(data);
        if (ret.code == 0) {
          this.fileList.forEach(item => {
            if (item.content == file.content) {
              file.url = ret.data.url;
            }
          });
          console.log("/uploadAfterRead fileList:", this.fileList);
        } else {
          throw new Error(ret.message);
        }
      } catch (err) {
        this.$toast.fail(err.message || "上传失败");
      }
    },

    async applySubmit() {
      this.applySumitBtn = true;
      this.detail.after.pics = [];
      this.fileList.forEach(item => {
        this.detail.after.pics.push(item.url);
      });

      console.log("/applySubmit data: ", this.detail.after);

      try {
        let data = this.detail.after;
        data.order_item_id = this.orderItemId;
        if (!data.type || !data.reason) {
          throw new Error("提交信息不完整");
        }
        let ret = await apis.afterApplySubmit(data);
        if (ret.code == 0) {
          this.onRefresh();
        } else {
          throw new Error(ret.message);
        }
      } catch (err) {
        this.$toast.fail(err.message || "提交失败");
      }

      this.applySumitBtn = false;
    }
  },
  async created() {
    this.orderItemId = this.$route.query.id;
    await this.getData();
  }
};
</script>
