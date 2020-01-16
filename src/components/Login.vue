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
      <div :class="{progress: loginLoading}">
        <div :class="{indeterminate: loginLoading}"></div>
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
          <el-tab-pane :disabled="loginLoading" label="账号登陆" name="accountLoginForm" style="">
            <el-form :model="accountLoginForm">
              <el-input
                prefix-icon="el-icon-user-solid"
                v-model="accountLoginForm.username"
                placeholder="请输入账号">
              </el-input>
              <el-input
                prefix-icon="fa fa-lock"
                v-model="accountLoginForm.password"
                placeholder="请输入密码"
                show-password></el-input>
            </el-form>
            <el-row>
              <el-button
                :loading="loginLoading"
                :disabled="accountLoginConfirm.submitDisabled"
                type="primary" @click="loginWithPwd">
                {{ loginSubmitText }}
              </el-button>
            </el-row>
            <div class="login-aux">
              <label class="forget">忘记密码？</label>
              <label class="register">立即注册</label>
            </div>
          </el-tab-pane>

          <!-- 使用验证码登陆 -->
          <el-tab-pane :disabled="loginLoading" label="验证码登陆" name="verifyCodeLoginForm">
            <el-form :model="verifyCodeLoginForm">
              <el-input
                prefix-icon="fa fa-envelope"
                v-model="verifyCodeLoginForm.email"
                placeholder="请输入邮箱">
              </el-input>
              <el-input
                prefix-icon="fa fa-key"
                v-model="verifyCodeLoginForm.verifyCode"
                placeholder="请输入验证码"
                :style="{ 'padding-right': verifyCodeLoginConfirm.paddingRight + 'px'}">
                <el-button
                  slot="suffix" size="small"
                  round @click="securityCode"
                  :disabled="verifyCodeLoginConfirm.disabled"
                  style="position: relative; top: 10px;">
                  {{ verifyCodeLoginConfirm.text }}
                </el-button>
              </el-input>
            </el-form>
            <el-row>
              <el-button
                :loading="loginLoading"
                :disabled="verifyCodeLoginConfirm.submitDisabled"
                type="primary" @click="loginWithVerify">
                {{ loginSubmitText }}
              </el-button>
            </el-row>
          </el-tab-pane>

        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
    import {TweenLite} from 'gsap';

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
                    'https://test-one-road.oss-cn-hangzhou.aliyuncs.com/login/scenic-photo-of-bondi-beach.jpg',
                    'https://test-one-road.oss-cn-hangzhou.aliyuncs.com/login/sean-o-KMn4VEeEPR8-unsplash.jpg',
                    'https://test-one-road.oss-cn-hangzhou.aliyuncs.com/login/jack-brind-eV7WTlVcydg-unsplash.jpg'
                ],
                tabActivity: 'accountLoginForm',
                /* 登录状态 */
                loginLoading: false,
                loginSubmitText: '登陆',
                /* 账号登录确认 */
                accountLoginConfirm: {
                    submitDisabled: true
                },
                /* 验证码登录确认 */
                verifyCodeLoginConfirm: {
                    disabled: false,
                    text: '验证码',
                    countDown: 0,
                    paddingRight: 80,
                    resendInterval: 2,
                    submitDisabled: true
                },
                /* 账号密码登录 */
                accountLoginForm: {
                    username: '',
                    password: ''
                },
                /* 验证码登录 */
                verifyCodeLoginForm: {
                    email: '',
                    verifyCode: '',
                }
            }
        },
        methods: {
            resizeScreen() {
                this.screen.innerWidth = window.innerWidth;
                this.screen.innerHeight = window.innerHeight;
            },
            loginWithPwd() {
                this.loginLoading = !this.loginLoading;
                this.loginSubmitText = this.loginLoading === true ? '登陆中...' : '登陆';
            },
            loginWithVerify() {
                this.loginLoading = !this.loginLoading;
                this.loginSubmitText = this.loginLoading === true ? '登陆中...' : '登陆';
            },
            securityCode() {
                if (this.verifyCodeLoginConfirm.countDown === 0) {
                    this.verifyCodeLoginConfirm.countDown = this.verifyCodeLoginConfirm.resendInterval;
                }
                this.verifyCodeLoginConfirm.disabled = true;
                this.decrease();
            },
            decrease() {
                const describe = 's后重新发送';
                this.verifyCodeLoginConfirm.countDown--;
                TweenLite.to(this.$data.verifyCodeLoginConfirm, 0.5, {paddingRight: 120});
                this.verifyCodeLoginConfirm.text = this.verifyCodeLoginConfirm.countDown + describe;
                setTimeout(() => {
                    if (this.verifyCodeLoginConfirm.countDown === 0) {
                        this.verifyCodeLoginConfirm.disabled = false;
                        this.verifyCodeLoginConfirm.text = '重新发送';
                        TweenLite.to(this.$data.verifyCodeLoginConfirm, 0.5, {paddingRight: 90});
                    } else {
                        this.decrease();
                    }
                }, 1000);
            }
        },
        watch: {
            /* 监听账号登录框 */
            accountLoginForm: {
                deep: true,
                handler(newVal, oldVal) {
                    this.accountLoginConfirm.submitDisabled = !(!!newVal.username && !!newVal.password);
                }
            },
            /* 监听验证登录框 */
            verifyCodeLoginForm: {
                deep: true,
                handler(newVal, oldVal) {
                    this.verifyCodeLoginConfirm.submitDisabled = !(!!newVal.email && !!newVal.verifyCode);
                }
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
    font-size: 16px !important;
    color: #999;
  }

  .el-tabs__content {
    padding: 20px !important;
  }

  .el-row {
    top: 10px;
  }

  .el-input__prefix {
    padding-left: 0 !important;
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
    width: 660px;
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
    width: 300px;
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
    padding-left: 30px !important;
    box-sizing: border-box !important;
    border-bottom: 1px solid #DCDFE6 !important;
  }

  input:focus {
    border-bottom: 1px solid #26a69a !important;
    -webkit-box-shadow: 0 1px 0 0 #26a69a !important;
    box-shadow: 0 1px 0 0 #26a69a !important;
  }

  button {
    width: 100%;
  }
</style>
