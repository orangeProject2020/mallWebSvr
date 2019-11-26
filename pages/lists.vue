<template>
  <div class>
    <van-nav-bar :border="false" @click-right="goCart" >
      <template slot="left">
        <span class="text-2xl font-bold">商城</span>
      </template>
      <van-icon name="shopping-cart-o" slot="right" size="20" />
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="pl-3 pr-3">
        <van-swipe :autoplay="3000" indicator-color="blue" :height="100">
          <van-swipe-item v-for="item in banners" :key="item.id">
            <div>
              <img
                :lazy="item.img"
                :src="item.img"
                style="height:100px;width:100%;"
                class="bg-gray-300 rounded-lg"
              />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="mt-6 flex flex-row ">
        <div class="flex-initial">
          <van-sidebar v-model="activeCategory" @change="categoryChange">
            <template v-for="item in categorys" >
              <van-sidebar-item :title="item.title" :key="item.id"/>
            </template>
          </van-sidebar>
        </div>
        <div class="flex flex-row flex-wrap p-3 text-center flex-1">
          <div class="w-full text-center p-3 text-2xl border-b " v-if="categorys.length">
            {{ categorys[activeCategory].title}}
          </div>
          <div class="w-1/3 p-3">
            <div class="text-center"><img src="" alt="" style="width:60px;height:60px;" class="rounded bg-gray-300 inline-block"></div>
            <div class="mt-3 truncate">xxxxxxxxxxxxxxxxx</div>
            <div class="truncate ">
              <span class="text-red-500 text-sm">￥100.00</span>
              <span class="text-gray-500 text-xs line-through">￥100.00</span>
            </div>
          </div>
          <div class="w-1/3 p-3">
            <div class="text-center"><img src="" alt="" style="width:60px;height:60px;" class="rounded bg-gray-300 inline-block"></div>
            <div class="mt-3 truncate">xxxxxxxxxxxxxxxxx</div>
            <div class="truncate ">
              <span class="text-red-500 text-sm">￥100.00</span>
              <span class="text-gray-500 text-xs line-through">￥100.00</span>
            </div>
          </div>
          <div class="w-1/3 p-3">
            <div class="text-center"><img src="" alt="" style="width:60px;height:60px;" class="rounded bg-gray-300 inline-block"></div>
            <div class="mt-3 truncate">xxxxxxxxxxxxxxxxx</div>
            <div class="truncate ">
              <span class="text-red-500 text-sm">￥100.00</span>
              <span class="text-gray-500 text-xs line-through">￥100.00</span>
            </div>
          </div>
          <div class="w-1/3 p-3">
            <div class="text-center"><img src="" alt="" style="width:60px;height:60px;" class="rounded bg-gray-300 inline-block"></div>
            <div class="mt-3 truncate">xxxxxxxxxxxxxxxxx</div>
            <div class="truncate ">
              <span class="text-red-500 text-sm">￥100.00</span>
              <span class="text-gray-500 text-xs line-through">￥100.00</span>
            </div>
          </div>
        </div>
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
      title: "商城"
    };
  },
  data() {
    return {
      isLoading: false,
      activeCategory: 0,
      banners: [{ id: 1, img: "" }, { id: 2, img: "" }],
      categorys: []
    };
  },
  methods: {
    goCart() {
      this.$router.push("/cart");
    },
    async categoryChange(index){
      console.log('/categoryChange index:', index)
      let category = this.categorys[index]
      console.log('/categoryChange category:', category)
    },
    async getCategorys() {
      let categorys = []
      if (this.$store.state.isApp) {
        categorys = plus.storage.getItem('mall_categorys') || null
        categorys = categorys ? JSON.parse(categorys) : []
        console.log('/getCategorys get from cache ...')
      }
      console.log('/getCategorys categorys' , JSON.stringify(categorys))
      if (categorys.length <= 0){
        let categorysRet = await apis.getCategorys()
        console.log('/getCategorys get from api ...')
        console.log('/getCategorys categorysRet:', categorysRet)
        if (categorysRet.code === 0) {
          categorys = categorysRet.data.rows
        }

        if (this.$store.state.isApp) {
          plus.storage.setItem('mall_categorys', JSON.stringify(categorys))
          console.log('/getCategorys set cache ...')
        }
      }

      console.log('/getCategorys categorys:', categorys)
      this.categorys = categorys
      
    },
    onRefresh() {}
  },
  
  async created() {
    
    document.addEventListener("UniAppJSBridgeReady", () => {
      console.log("UniAppJSBridgeReady .................");
      this.$store.commit("isAppSet", true);
    });

    await this.getCategorys()

    this.$toast.clear()

  }
};
</script>
