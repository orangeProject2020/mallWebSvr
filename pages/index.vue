<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="blue" :height="200">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <van-tree-select
      height
      :items="categorys"
      :main-active-index.sync="activeIndex"
      @click-nav="categoryChoose"
    >
      <template slot="content">
        <template v-for="item in goodsData.rows">
          <van-card
            tag="标签"
            price="2.00"
            desc="描述信息描述信息描述信息描述信息描述信息描述信息描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            origin-price="10.00"
            @click="goToDetail"
          />
        </template>
      </template>
    </van-tree-select>
  </div>
</template>
<script>
import axios from "./../server/axios";

export default {
  async fetch({ store, params }) {
    if (!store.state.categorys.length) {
      let categorysRet = await axios.post("/api/mall/goods/categorys", {
        status: 1
      });
      console.log("/fetch categorysRet", categorysRet);
      if (categorysRet.code === 0) {
        store.commit("categorysSet", categorysRet.data.rows);
      }
    }
  },
  async created() {
    console.log("/created categoryActive:", this.$store.state.categoryActive);
    this.activeIndex = this.$store.state.categoryActive;
    console.log("/created categoryActive:", this.activeIndex);
    this.getGoodsList();
  },
  data() {
    return {
      // isApp: false,
      activeIndex: 0,
      categoryIdActive: 1
      // categorys: [
      // ]
    };
  },
  computed: {
    categorys() {
      let list = [];
      this.$store.state.categorys.forEach(item => {
        list.push({
          id: item.id,
          name: item.name,
          text: item.title
        });
      });
      return list;
    },
    goodsData() {
      this.categoryIdActive = this.categoryIdActiveGet();
      console.log("categoryIdActive:", this.categoryIdActive);
      if (!this.$store.state.goodsData["category_" + this.categoryIdActive]) {
        this.$store.commit("goodsDataSet", {
          category_id: this.categoryIdActive,
          rows: [],
          count: 0,
          page: 0
        });
      }

      return this.$store.state.goodsData["category_" + this.categoryIdActive];
    }
  },
  methods: {
    categoryIdActiveGet() {
      return this.categorys[this.activeIndex].id || 0;
    },
    categoryChoose(index) {
      console.log(index);
      this.$store.commit("categoryActiveSet", index);
      let category = this.$store.state.categorys[index];
      console.log("categoryChoose ", category);
    },
    async getGoodsList() {
      console.log("/getGoodsList start ...");
      let categoryId = this.categoryIdActiveGet();
      if (!this.$store.state.goodsData["category_" + categoryId]) {
        this.$store.commit("goodsDataSet", {
          category_id: categoryId,
          rows: [],
          count: 0,
          page: 0
        });
      }
      let goodsData = this.$store.state.goodsData["category_" + categoryId];
      console.log(goodsData);

      let page = goodsData.page || 1;

      let goodsRet = await axios.post("/api/mall/goods/list", {
        category_id: categoryId,
        page: page,
        limit: 2,
        status: 1
      });

      console.log("/getGoodsList goodsRet", goodsRet);
      if (goodsRet.code === 0) {
        this.$store.commit("goodsDataSet", {
          category_id: categoryId,
          rows: goodsRet.data.rows,
          count: goodsRet.data.count,
          page: page
        });
      }
    },
    goToDetail() {
      this.$router.push("/goods/detail?id=");
    }
  }
};
</script>