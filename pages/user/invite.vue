<template>
  <div>
    <van-nav-bar
      title="我的邀请"
      left-text
      left-arrow
      @click-left="navBack"
      v-if="!navBarHide"
    ></van-nav-bar>

    <van-tabs v-model="activeTab" @change="tabChange">
      <van-tab title="邀请码" name="code">
        <div class="text-center">
          <div
            class="mt-8 inline-block bg-gray-400"
            style="width:200px;height:200px;"
            id="qrcode-invite"
          ></div>
        </div>
        <div class="text-center mt-4">
          <div class="text-gray-500">我的邀请码:</div>
          <div class="text-3xl ">{{ inviteCode }}</div>
        </div>
        <div class="p-12">
          <div class="border-t text-center">
            <div class="text-3xl mt-3">时不我待，money快来</div>
            <div></div>
          </div>
        </div>
      </van-tab>
      <van-tab title="邀请记录" name="logs">2 </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
import QRCode from "qrcodejs2";
export default {
  head() {
    return {
      title: "我的邀请"
    };
  },
  data() {
    return {
      navBarHide: false,
      activeTab: "code",
      inviteCode: ""
    };
  },
  methods: {
    ...utils,
    navBack() {
      this.$router.go(-1);
    },
    async getUserInviteCode() {
      try {
        let inviteRet = await apis.getUserInviteCode();
        console.log(
          "/create inviteCodeRet:",
          JSON.stringify(inviteRet, null, 2)
        );
        if (inviteRet.code === 0) {
          let code = inviteRet.data.code;
          this.inviteCode = code;
          let inviteUrl =
            process.env.nodeEnv === "production"
              ? process.env.apiDomain
              : process.env.apiDomainLocal;
          inviteUrl += "/invite/join?inviteCode=" + code;
          console.log("/create invitUrl:", inviteUrl);
          this.createQrcode(inviteUrl);
        } else {
          throw new Error(inviteRet.message);
        }
      } catch (err) {
        this.$toast.fail(err.message);
      }
    },
    createQrcode(text) {
      let qrcode = new QRCode("qrcode-invite", {
        width: 200,
        height: 200, // 高度
        text: text // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f'
        // foreground: '#ff0'
      });
      console.log(qrcode);
    },
    tabChange(data) {
      // let name = data.name;
      console.log("/tabChange data:", data);
      console.log("/tabChange this.inviteCode:", this.inviteCode);
      if (data == "code" && this.inviteCode == "") {
        console.log("/tabChange tabChange");
        this.getUserInviteCode();
      }
    }
  },
  async created() {
    if (this.$route.query.from === "appTab") {
      this.navBarHide = true;
    }

    let activeTab = this.$route.query.active || "code";
    console.log("/activeTab ", activeTab);
    this.activeTab = activeTab;

    if (this.activeTab == "code") {
      this.getUserInviteCode();
    }
  }
};
</script>
