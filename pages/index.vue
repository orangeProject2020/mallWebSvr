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
        <template v-for="item in goodsList">
          <van-card
            tag="标签"
            :price="item.price/100"
            :desc="item.description"
            :title="item.name"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            :origin-price="item.price_market / 100"
            @click="goToDetail(item)"
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
  mounted() {
    // console.log("/created categoryActive:", this.$store.state.categoryActive);
    // this.activeIndex = this.$store.state.categoryActive;
    // console.log("/created categoryActive:", this.activeIndex);
    // this.getGoodsList();
  },
  data() {
    return {
      // isApp: false,
      activeIndex: 0,
      categoryIdActive: 1,
      goodsData: {},
      goodsList: []
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
    }
  },
  methods: {
    categoryIdActiveGet() {
      console.log("categoryIdActiveGet.activeIndex ", this.activeIndex);
      return this.categorys[this.activeIndex].id || 0;
    },
    categoryChoose(index) {
      console.log(index);
      this.$store.commit("categoryActiveSet", index);
      let category = this.$store.state.categorys[index];
      console.log("categoryChoose ", category);
      this.activeIndex = index;
      this.getGoodsList();
    },
    async getGoodsList() {
      console.log("/getGoodsList start ...");
      let categoryId = this.categoryIdActiveGet();
      console.log("/getGoodsList categoryId:", categoryId);

      if (!this.goodsData["category_" + categoryId]) {
        if (this.$store.state.goodsData["category_" + categoryId]) {
          this.goodsData[
            "category_" + categoryId
          ] = this.$store.state.goodsData["category_" + categoryId];
        } else {
          this.goodsData["category_" + categoryId] = {
            rows: [],
            count: 0,
            page: 0
          };
        }
      }
      let goodsData = this.goodsData["category_" + categoryId];
      console.log("/getGoodsList goodsData", goodsData);

      let page = goodsData.page || 1;
      let limit = 2;
      let goodsRet = await axios.post("/api/mall/goods/list", {
        category_id: categoryId,
        page: page,
        limit: limit,
        status: 1
      });

      console.log("/getGoodsList goodsRet", goodsRet);
      if (goodsRet.code === 0) {
        this.$store.commit("goodsDataSet", this.goodsData);
      }

      this.goodsData["category_" + categoryId].count = goodsRet.data.count;
      this.goodsData["category_" + categoryId].page = page + 1;

      goodsRet.data.rows.forEach(item => {
        this.goodsData["category_" + categoryId].rows.push(item);
      });
      console.log(
        "/getGoodsList goodsData ",
        categoryId,
        this.goodsData["category_" + categoryId]
      );
      this.goodsList = this.goodsData["category_" + categoryId].rows;
    },
    goToDetail(item) {
      this.$router.push("/goods/detail?id=" + item.id);
    }
  }
};
</script>