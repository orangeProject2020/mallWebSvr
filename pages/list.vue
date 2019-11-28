<template>
  <div>
    <div class="flex">
      <div class="p-6 text-2xl">返回</div>
      <van-search placeholder="请输入搜索关键词" v-model="search" class="flex-1" />
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="activeType" :options="optionTypes" />
      <van-dropdown-item v-model="activeType1" :options="optionTypes1" />
      <van-dropdown-item v-model="activeSort" :options="optionSorts" />
    </van-dropdown-menu>

    <van-list
      v-model="listData.loading"
      :finished="listData.finished"
      finished-text="没有更多了"
      @load="listLoad"
    >
      <van-cell>
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :lazy-load="true">
          <template slot="title">
            <span class="text-xl">商品标题</span>
          </template>
          <template slot="thumb">
            <img
              src="https://img.yzcdn.cn/vant/t-thirt.jpg"
              alt
              v-lazy="'https://img.yzcdn.cn/vant/t-thirt.jpg'"
            />
          </template>
        </van-card>
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
      title: "商品列表"
    };
  },
  data() {
    return {
      title: "商品列表",
      search: "",
      listData: {
        loading: false,
        finished: true
      },
      activeType: 0,
      activeType1: 0,
      activeSort: 0,
      optionTypes: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "推荐商品", value: 2 }
      ],
      optionTypes1: [
        { text: "全部", value: 0 },
        { text: "男用", value: 1 },
        { text: "女用", value: 2 }
      ],
      optionSorts: [
        { text: "默认", value: 0 },
        { text: "价格低->高", value: 1 },
        { text: "价格高->低", value: 2 }
      ]
    };
  },
  methods: {
    ...utils,
    methods: {
      listLoad() {}
    },
    navBack() {
      if (this.$store.state.isApp) {
        uni.navigateBack();
      } else {
        this.$router.go(-1);
      }
    }
  },
  created() {}
};
</script>

<style lang="less">
.van-card {
  background-color: #ffffff !important;
}
</style>
