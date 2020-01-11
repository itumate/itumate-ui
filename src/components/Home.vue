<template>
  <el-container class="app-wrapper">
    <el-aside class="app-aside">
      <left-side-bar-menu :menuItemList="menuItemList"></left-side-bar-menu>
    </el-aside>
    <el-container>
      <el-header class="app-header">
        这是 header
      </el-header>
      <el-main class="app-main">
        <transition enter-active-class="animated fadeInLeft">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-main>
      <el-footer class="app-footer">
        <small class="text-muted">技术支持：某某某某某某 | 某某某某某某<br>服务热线：000-000-000</small>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>

    import LeftSideBarMenu from './leftsidebar/LeftSideBarMenu';

    export default {
        name: 'Home',
        components: {
            LeftSideBarMenu
        },
        data() {
            return {
                menuItemList: [{
                    id: 1,
                    label: '系统设置',
                    isLeaf: false,
                    icon: {
                        isElement: true,
                        class: 'el-icon-setting'
                    },
                    children: [{
                        id: 10,
                        label: 'Git',
                        isLeaf: true,
                        path: '/git',
                        icon: {
                            isElement: false,
                            class: 'fa-git'
                        }
                    }]
                },{
                    id: 2,
                    label: '你好, 世界',
                    isLeaf: true,
                    path: '/helloWorld',
                    icon: {
                        isElement: false,
                        class: 'fa-connectdevelop'
                    }
                }]
            };
        }
    }
</script>

<style scoped>
  @import "./../assets/css/animate.css";
</style>
