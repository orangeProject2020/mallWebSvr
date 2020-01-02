<template>
  <div>
    <van-nav-bar title="注册"></van-nav-bar>

    <div class="p-3">
      <van-cell-group>
        <van-field
          v-model="submitData.mobile"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
          :error-message="errMsg.mobile"
        />

        <van-field
          v-model="submitData.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          :error-message="errMsg.password"
        />

        <van-field
          v-model="submitData.verify_code"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          :error-message="errMsg.verify_code"
        >
          <van-button
            slot="button"
            size="small"
            type="info"
            @click="getVerifyCode"
            :disabled="verifyCodeMsgBtn.disabled"
          >{{verifyCodeMsgBtn.text}}</van-button>
        </van-field>

        <van-field v-model="submitData.invite_code" label="邀请码" :disabled="inviteCodeDisabled" />
      </van-cell-group>

      <div class="mt-4 p-4">
        <van-button
          type="info"
          @click="onSubmit"
          block
          size="medium"
          :disabled="submitBtn.disabled"
          :loading="submitBtn.loading"
        >立即注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import apis from "@/assets/js/apis";
import utils from "@/assets/js/utils";
export default {
  head() {
    return {
      title: "注册"
    };
  },
  data() {
    return {
      verifyCodeMsgBtn: {
        disabled: false,
        text: "发送验证码",
        num: 60
      },
      submitData: {
        mobile: "",
        password: "",
        verify_code: "",
        invite_code: ""
      },
      errMsg: {
        mobile: "",
        password: "",
        verify_code: ""
      },
      checkMsg: {
        mobile: "请输入正确的手机号码",
        password: "请输入密码",
        verify_code: "请输入验证码"
      },
      submitBtn: {
        disabled: false,
        loading: false
      },
      inviteCodeDisabled: false
    };
  },
  methods: {
    ...utils,
    navBack() {
      this.$router.go(-1);
    },
    checkField() {
      let data = this.submitData;
      let error = 0;
      if (data.mobile == "") {
        this.errMsg.mobile = this.checkMsg.mobile;
        error++;
      } else {
        this.errMsg.mobile = "";
      }

      if (data.password == "") {
        this.errMsg.password = this.checkMsg.password;
        error++;
      } else {
        this.errMsg.password = "";
      }

      // if (data.verify_code == "") {
      //   this.errMsg.verify_code = this.checkMsg.verify_code;
      //   error++;
      // } else {
      //   this.errMsg.verify_code = "";
      // }

      return error ? true : false;
    },
    async getVerifyCode() {
      if (this.submitData.mobile.length != 11) {
        this.$toast.fail("请输入正确的手机号码");
        return;
      }
      this.verifyCodeMsgBtn.disabled = true;
      if (this.verifyCodeMsgBtn.num == 60) {
        // 发送验证码
        let ret = await apis.getVerifyCode({ mobile: this.submitData.mobile });
        if (ret.code != 0) {
          this.verifyCodeMsgBtn.num = 1;
          this.$toast.fail(ret.message || "发送失败");
        }
      }
      let num = this.verifyCodeMsgBtn.num - 1;

      if (num == 0) {
        this.verifyCodeMsgBtn.disabled = false;
        num = 60;
        this.verifyCodeMsgBtn.num = num;
        this.verifyCodeMsgBtn.text = "发送验证码";
      } else {
        this.verifyCodeMsgBtn.text = `(${num})s后重发`;
        // console.log("/getVerifyCode:", this.verifyCodeMsgBtn);
        this.verifyCodeMsgBtn.num = num;
        setTimeout(() => {
          this.getVerifyCode();
        }, 1000);
      }
    },
    async onSubmit() {
      let checkRet = this.checkField();
      if (checkRet) {
        return;
      }

      let data = this.submitData;
      data.platform = utils.checkPlatform() || "invite";
      data.device = "";
      data.auth_type = "h5";
      data.user_type = 1;

      console.log("/onSubmit data:", data);
      this.submitBtn.disabled = true;
      this.submitBtn.loading = true;
      try {
        let submitRet = await apis.authLogin(data);
        console.log("/onSubmit ret:", submitRet);
        if (submitRet.code === 0) {
          this.$toast.success("注册成功");
          setTimeout(() => {
            this.$router.replace("/download/app?isJoin=1");
          }, 2000);
        } else {
          throw new Error(submitRet.message);
        }
      } catch (err) {
        this.$toast.fail(err.message || "注册失败，稍后重试");
      }

      this.submitBtn.disabled = false;
      this.submitBtn.loading = false;
    }
  },
  created() {
    let inviteCode = this.$route.query.inviteCode || "";
    if (inviteCode) {
      this.inviteCodeDisabled = true;
      this.submitData.invite_code = inviteCode;
    }
  }
};
</script>
