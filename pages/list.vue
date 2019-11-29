<template>
  <div>
    <div class="flex">
      <div class="p-6 text-2xl" @click="navBack">返回</div>
      <van-search placeholder="请输入搜索关键词" v-model="search" class="flex-1" @search="searchList" />
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="activeType" :options="optionTypes" @change="activeChange" />
      <van-dropdown-item v-model="activeType1" :options="optionTypes1" @change="activeChange" />
      <van-dropdown-item v-model="activeSort" :options="optionSorts" @change="activeChange" />
    </van-dropdown-menu>

    <van-list
      v-model="listData.loading"
      :finished="listData.finished"
      finished-text="没有更多了"
      @load="listLoad"
    >
      <van-cell v-for="item in listData.list" :key="item.id">
        <van-card
          :price="(item.price / 100).toFixed(2)"
          :origin-price="(item.price_market/100).toFixed(2)"
          :desc="item.description"
          title="商品标题"
          :lazy-load="true"
        >
          <template slot="title">
            <span class="text-2xl text-black-50">{{item.title}}</span>
          </template>
          <template slot="thumb">
            <img :src="item.cover" alt style="width:80px;height:80px" />
          </template>
          <template slot="tag">
            <template v-if="item.is_recommend">
              <van-tag type="danger" mark>HOT</van-tag>
            </template>
            <template v-else-if="item.is_new">
              <van-tag type="success" mark>NEW</van-tag>
            </template>
            <template v-else></template>
          </template>
          <template slot="tags">
            <div class="text-gray-500">
              <template v-if="item.package_level > 0">套餐</template>
              <template v-if="item.type_sub == 1">男用</template>
              <template v-if="item.type_sub == 2">女用</template>
            </div>
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
        finished: false,
        list: [],
        count: 0,
        page: 1,
        limit: 10
      },
      activeType: "",
      activeType1: 0,
      activeSort: "",
      optionTypes: [
        { text: "全部商品", value: "" },
        { text: "新款商品", value: "new" },
        { text: "推荐商品", value: "recommend" }
      ],
      optionTypes1: [
        { text: "类别", value: 0 },
        { text: "男用", value: 1 },
        { text: "女用", value: 2 }
      ],
      optionSorts: [
        { text: "排序:默认", value: "" },
        { text: "价格低->高", value: "price,asc" },
        { text: "价格高->低", value: "price,desc" }
      ]
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
      let data = {
        page: this.listData.page,
        limit: this.listData.limit
      };
      if (this.activeType == "new") {
        data.new = 1;
      }
      if (this.activeType == "recommend") {
        data.recommend = 1;
      }
      if (this.activeType1) {
        data.type_sub = this.activeType1;
      }
      if (this.activeSort) {
        data.order = this.activeSort.split(",");
      }
      if (this.search) {
        data.search = this.search;
      }
      console.log("/listLoad data", data);
      this.listData.loading = true;
      try {
        let ret = await apis.getGoodsList(data);
        if (ret.code === 0) {
          this.listData.count = ret.data.count;
          ret.data.rows.forEach(item => {
            this.listData.list.push(item);
          });
          if (ret.data.rows.length < this.listData.limit) {
            this.listData.finished = true;
          } else {
            this.listData.page += 1;
          }
        } else {
          throw new Error(ret.message);
        }
      } catch (err) {
        this.$toast.fail(err.message);
      }
      this.listData.loading = false;
    },
    activeChange() {
      this.listData.page = 1;
      this.listData.list = [];
      this.listData.count = 0;

      this.listLoad();
    },
    searchList() {
      this.listData.page = 1;
      this.listData.list = [];
      this.listData.count = 0;

      this.listLoad();
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
