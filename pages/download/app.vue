<template>
  <div>
    <van-nav-bar title="APP下载"></van-nav-bar>

    <div class="text-center mt-8">
      <div
        class="mt-8 inline-block bg-gray-400"
        style="width:200px;height:200px;"
        id="qrcode-invite"
      ></div>
      <div class="mt-4 text-center p-8">
        <div class="border-t pt-8">
          <van-button type="info" @click="downloadClick"
            >点击下载APP</van-button
          >
        </div>
        <div class="mt-4 text-gray-500">
          {{ text }}
        </div>
      </div>
    </div>

    <van-overlay :show="overlayShow">
      <div class="wrapper text-right p-4 text-white">
        <div class="text-5xl">↑</div>
        <div>在默认浏览器打开</div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
import QRCode from "qrcodejs2";
export default {
  head() {
    return {
      title: "APP下载"
    };
  },
  data() {
    return {
      platform: "",
      isWeixin: "",
      text: "",
      downloadUrl: "",
      overlayShow: false
    };
  },
  methods: {
    ...utils,
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
    downloadClick() {
      if (this.isWeixin) {
        // 遮罩打开
        this.overlayShow = true;
      } else {
        location.href = this.downloadUrl;
      }
    }
  },
  async created() {},
  mounted() {
    let downloadUrl = process.env.appDownloadUrl;
    this.platform = utils.checkPlatform();
    console.log("/created platform:", this.platform);
    console.log("/created downloadUrl:", downloadUrl);

    this.isWeixin = utils.checkWeixin();
    if (this.isWeixin) {
      this.overlayShow = true;
    }
    console.log("/created isWeixin:", this.isWeixin);

    let isJoin = this.$route.query.isJoin || false;
    if (isJoin) {
      this.text = "注册账号成功，请下载app登录";
    }

    this.downloadUrl = downloadUrl[this.platform] || null;
    console.log("/created downloadUrl:", this.downloadUrl);
    if (this.downloadUrl) {
      this.createQrcode(this.downloadUrl);
    }
  }
};
</script>
