<template>
  <div>
    <van-nav-bar title @click-right="goCart" class="index-nav-bar">
      <van-icon name="shopping-cart-o" slot="right" size="2rem" />
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-swipe :autoplay="3000" indicator-color="blue" :height="200">
        <template v-for="item in banners">
          <van-swipe-item>
            <img :lazy="item.img" :src="item.img" style="height:200px;width:100%" />
          </van-swipe-item>
        </template>
      </van-swipe>

      <div class="border-t">
        <van-tree-select
          height
          :items="categorys"
          :main-active-index.sync="activeIndex"
          @click-nav="categoryChoose"
        >
          <template slot="content">
            <van-list
              v-model="listLoading"
              :finished="listFinished"
              finished-text="没有更多了"
              :error.sync="listError"
              error-text="请求失败，点击重新加载"
              @load="getGoodsList"
              :immediate-check="false"
            >
              <van-cell v-for="item in goodsList" :key="item.id" style="padding:0">
                <van-card
                  tag="new"
                  :price="(item.price/100).toFixed(2)"
                  :desc="item.description"
                  :title="item.title"
                  :thumb="item.cover"
                  :origin-price="(item.price_market / 100).toFixed(2)"
                  @click="goToDetail(item)"
                />
              </van-cell>
            </van-list>
          </template>
        </van-tree-select>
      </div>

      <!-- <div>下拉刷新</div> -->
    </van-pull-refresh>
  </div>
</template>
<script>
import axios from "./../server/axios";
import banners from "./../server/banners.json";
import utils from "@/assets/js/utils";

export default {
  head() {
    return {
      title: "商品列表"
    };
  },
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
    await this.getGoodsList();
  },
  mounted() {
    // console.log("/created categoryActive:", this.$store.state.categoryActive);
    // this.activeIndex = this.$store.state.categoryActive;
    // console.log("/created categoryActive:", this.activeIndex);
    // this.getGoodsList();
    console.log("/mounted .................");
    console.log("document:", document);
    document.addEventListener("UniAppJSBridgeReady", () => {
      console.log("UniAppJSBridgeReady .................");
      this.$store.commit("isAppSet", true);
    });
  },
  data() {
    return {
      // isApp: false,
      listLoading: false,
      listFinished: false,
      listError: false,
      banners: banners,
      isLoading: false,
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
    ...utils,
    async onRefresh() {
      this.activeIndex = 0;
      console.log("onRefresh start ...");
      this.listFinished = false;
      this.listLoading = true;

      this.goodsData = {};
      this.goodsList = {};
      this.$store.commit("goodsDataSet", this.goodsData);

      try {
        await this.getGoodsList();
        this.$toast.success("刷新成功");
      } catch (err) {
        this.$toast.fail("刷新失败，请稍后重试");
      }

      this.isLoading = false;
    },
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
      this.listFinished = false;
      this.listLoading = true;

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

      if (goodsRet.data.rows.length === 0) {
        this.listFinished = true;
      } else {
        this.goodsData["category_" + categoryId].count = goodsRet.data.count;
        this.goodsData["category_" + categoryId].page = page + 1;
      }

      goodsRet.data.rows.forEach(item => {
        this.goodsData["category_" + categoryId].rows.push(item);
      });
      console.log(
        "/getGoodsList goodsData ",
        categoryId,
        this.goodsData["category_" + categoryId]
      );
      this.goodsList = this.goodsData["category_" + categoryId].rows;

      this.listLoading = false;
    },
    goToDetail(item) {
      this.$router.push("/goods/detail?id=" + item.id);
    },
    goCart() {
      this.$router.push("/cart");
    }
  }
};
</script>

<style >
body {
  background-color: #fafafa;
}
.index-nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  /* opacity: 0.7; */
  background: none;
}

.index-nav-bar::after {
  border-bottom-width: 0;
}
</style>