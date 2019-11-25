<template>
  <div>
    <van-nav-bar title="地址信息变更" left-text left-arrow @click-left="navBack" v-if="!navBarHide"></van-nav-bar>

    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      show-postal
      :show-delete="addressInfo.id ? true : false"
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import axios from "axios";
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  head() {
    return {
      title: "地址信息变更"
    };
  },
  data() {
    return {
      navBarHide: false,
      areaList: {},
      addressInfo: {
      },
      searchResult: []
    };
  },
  methods: {
    ...utils,
    navBack() {
      this.$router.go(-1)
    },
    async onSave(data) {
      console.log('/onSave data', data)
      try {
        let ret = await apis.addressUpdate(data)
        console.log('/onSave ret:', ret)
        if (ret.code == 0) {
          this.$router.go(-1)
        } else {
          throw new Error(ret.message)
        }
      } catch(err) {
        this.$toast.fail(err.message || "报错用户地址信息失败");
      }
      
    },
    async onDelete(data) {
      console.log('/onDelete data', data.id)
      try {
        let ret = await apis.addressDelete(data)
        console.log('/onDelete ret:', ret)
        if (ret.code == 0) {
          this.$router.go(-1)
        } else {
          throw new Error(ret.message)
        }
      } catch(err) {
        this.$toast.fail(err.message || "报错用户地址信息失败");
      }
    }
  },
  async created() {
    if (this.$route.query.from === "appTab") {
      this.navBarHide = true;
    }

    let areaData = await axios.get('/api/area')
    console.log('/created area',areaData.data)
    this.areaList = areaData.data

    let address = this.$store.state.address
    this.addressInfo = address
  }
};
</script>