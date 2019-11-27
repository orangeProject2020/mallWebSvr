<template>
  <div>
    <van-nav-bar title="地址管理" left-text left-arrow @click-left="navBack"></van-nav-bar>

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  head() {
    return {
      title: "地址管理"
    };
  },
  data() {
    return {
      chosenAddressId: 0,
      list: [],
      addressList: []
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
    onAdd() {
      this.$store.commit("addressSet", {});
      let url = "/address/update";
      this.$router.push(url);
    },
    onEdit(item) {
      let id = item.id;
      this.addressList.forEach(address => {
        if (address.id == item.id) {
          this.$store.commit("addressSet", address);
        }
      });
      let url = "/address/update";
      this.$router.push(url);
    },
    onSelect(item) {
      let id = item.id;
      this.addressList.forEach(address => {
        if (address.id == item.id) {
          this.$store.commit("addressSet", address);
        }
      });
      if (this.$route.query.jump) {
        this.$router.go(-1);
      }
    }
  },
  async created() {
    let ret = await apis.addressList();
    console.log("/created ret:", ret);
    if (ret.code == 0) {
      let list = ret.data.rows;
      list.forEach(item => {
        this.addressList.push(item);
        this.list.push({
          id: item.id,
          name: item.name,
          tel: item.tel,
          address: item.province + item.city + item.county + item.addressDetail
        });
      });
    }
  }
};
</script>