<template>
  <div class="wrapper unselect">
    <el-carousel
      :interval="3000"
      trigger="click" :height="screen.innerHeight + 'px'">
      <el-carousel-item v-for="(cover, index) in covers" :key="index">
        <img :src="cover" class="cover">
      </el-carousel-item>
    </el-carousel>
    <div class="login-main">
      <!--加载进度条-->
      <div :class="{progress: loginConfirm.loginLoading}">
        <div :class="{indeterminate: loginConfirm.loginLoading}"></div>
      </div>

      <div class="login-title">
        <h4>欢迎登陆</h4>
      </div>

      <!--Logo And ProjectName-->
      <div class="navbar-brand">
        <span class="img-box"><img src="../assets/logo.png"></span>
        <span class="brand-name">项目V1.0</span>
      </div>

      <div class="login-wrap">
        <el-tabs :stretch="true" v-model="tabActivity" class="el-tabs">
          <!-- 使用账号密码登陆 -->
          <el-tab-pane label="账号登陆" name="AccountLogin" style="">
            <el-form :model="formLabelAlign">
              <el-input prefix-icon="el-icon-user-solid" v-model="formLabelAlign.name" placeholder="请输入账号"></el-input>
              <el-input prefix-icon="fa fa-lock" v-model="formLabelAlign.region" placeholder="请输入密码"></el-input>
            </el-form>
            <el-row>
              <el-button :loading="loginConfirm.loginLoading" type="primary" @click="login">{{ loginConfirm.text }}</el-button>
            </el-row>
            <div class="login-aux">
              <label class="forget">忘记密码？</label>
              <label class="register">立即注册</label>
            </div>
          </el-tab-pane>

          <!-- 使用验证码登陆 -->
          <el-tab-pane label="验证码登陆" name="VerificationCodeLogin">
            <el-form :model="formLabelAlign">
              <el-input prefix-icon="fa fa-envelope" v-model="formLabelAlign.name" placeholder="请输入邮箱"></el-input>
              <el-input prefix-icon="fa fa-key" v-model="formLabelAlign.region" placeholder="请输入验证码">
                <el-button slot="suffix" size="small" round style="position: relative; top: 10px;">验证码</el-button>
              </el-input>
            </el-form>
            <el-row>
              <el-button :loading="loginConfirm.loginLoading" type="primary" @click="login">{{ loginConfirm.text }}</el-button>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        screen: {
          innerWidth: 0,
          innerHeight: 0
        },
        covers: [
          'https://test-one-road.oss-cn-hangzhou.aliyuncs.com/login/1.jpg',
          'https://test-one-road.oss-cn-hangzhou.aliyuncs.com/login/scenic-photo-of-bondi-beach.jpg'
        ],
        tabActivity: 'AccountLogin',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        loginConfirm: {
          loginLoading: false,
          text: '登陆'
        },
      }
    },
    methods: {
      resizeScreen() {
        this.screen.innerWidth = window.innerWidth;
        this.screen.innerHeight = window.innerHeight;
      },
      login() {
        this.loginConfirm.loginLoading = !this.loginConfirm.loginLoading;
        this.loginConfirm.text = this.loginConfirm.loginLoading === true ? '登陆中...' : '登陆';
        setTimeout(() => {
          this.$router.push('/home')
        }, 3000);
      }
    },
    created() {
      this.resizeScreen();
    },
    mounted() {
      window.onresize = () => {
        this.resizeScreen();
      };
    }
  }
</script>

<style>
  /* 解决materialize样式冲突 */
  .carousel, .carousel-item {
    visibility: unset !important;
    width: 100% !important;
    height: 100% !important;
    position: unset !important;
    top: unset !important;
    left: unset !important;
  }

  /* el 样式修改 */
  .el-tabs {
    margin-top: 15px;
  }

  /* 修改 tabs 字体样式 */
  .el-tabs__item {
    font-size: 16px!important;
    color: #999;
  }

  .el-tabs__content {
    padding: 20px!important;
  }

  .el-row {
    top: 10px;
  }

  .el-input__prefix {
    padding-left: 0!important;
  }

  /* 模拟进度条 */
  .progress {
    position: absolute;
    height: 5px;
    margin: 0;
  }

  /* 登陆样式 */
  .wrapper {
    position: relative;
    height: 100% !important;
  }

  img.cover {
    height: 100%;
    width: 100%;
  }

  .login-main {
    position: absolute;
    z-index: 999;
    width: 640px;
    height: 400px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-box-shadow: 0 0 16px rgba(0, 0, 0, .4);
    box-shadow: 0 0 16px rgba(0, 0, 0, .4);
  }

  .login-title {
    float: left;
    width: 360px;
    height: 100%;
    filter: alpha(Opacity=50);
    -moz-opacity: 0.5;
    opacity: 0.5;
    -webkit-filter: brightness(5);
    background: white;
  }

  .login-title h4 {
    color: #000;
    font-size: 20px;
    padding-left: 20px;
    margin-top: 80px;
  }

  /* */
  .navbar-brand {
    position: absolute;
    display: inline-block;
    float: none;
    height: auto;
    left: 0;
    padding: 0 20px;
    font-size: 20px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
    margin-top: 15px;
  }

  .img-box {
    display: inline-block;
    width: 36px;
    height: 50px;
  }

  .img-box img {
    max-width: 36px;
    max-height: 36px;
  }

  .navbar-brand img {
    max-height: 20px;
    margin-top: -4px;
    vertical-align: middle;
  }

  .brand-name {
    font-size: 24px;
    margin-left: 5px;
  }

  .login-wrap {
    float: right;
    width: 280px;
    height: 100%;
    background: white;
    box-shadow: 0 0 16px rgba(0, 0, 0, .4);
  }

  .login-aux {
    position: relative;
    top: 20px;
  }

  .login-aux label {
    cursor: pointer;
    font-size: 14px;
  }

  .login-aux label:hover {
    color: #7266BA;
  }

  label.forget {
    float: left;
    padding-left: 10px;
  }

  label.register {
    float: right;
    padding-right: 10px;
  }

  input {
    color: #696969;
    padding-left: 30px!important;
    box-sizing: border-box!important;
    border-bottom: 1px solid #DCDFE6!important;
  }

  input:focus{
    border-bottom: 1px solid #26a69a!important;
    -webkit-box-shadow: 0 1px 0 0 #26a69a!important;
    box-shadow: 0 1px 0 0 #26a69a!important;
  }

  button {
    width: 100%;
  }
</style>
