<template>
  <el-container class="app-wrapper">
    <el-aside class="lsm">
      <left-side-bar-menu :menuItemList="menuItemList"></left-side-bar-menu>
    </el-aside>
    <el-container>
      <el-header>
        这是 header
      </el-header>
      <breadcrumb-nav></breadcrumb-nav>
      <el-main>
        <transition enter-active-class="animated fadeInLeft">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-main>
      <el-footer>
        <small class="text-muted">技术支持：某某某某某某 | 某某某某某某<br>服务热线：000-000-000</small>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>

    import LeftSideBarMenu from './leftsidebar/LeftSideBarMenu';
    import BreadcrumbNav from "./nav/BreadcrumbNav";

    export default {
        name: 'Home',
        components: {
            LeftSideBarMenu,
            BreadcrumbNav
        },
        data() {
            return {
                menuItemList: [{
                    id: 1,
                    label: '首页',
                    animated: 'fadeIn',
                    isLeaf: false,
                    path: '/home',
                    icon: {
                        isElement: true,
                        class: 'el-icon-setting'
                    },
                    children: [{
                        id: 2,
                        label: '你好, 世界',
                        animated: 'tada',
                        isLeaf: true,
                        path: '/helloWorld',
                        icon: {
                            isElement: false,
                            class: 'fa-connectdevelop'
                        }
                    },{
                        id: 10,
                        label: 'Git',
                        animated: 'fadeIn',
                        isLeaf: true,
                        path: '/git',
                        icon: {
                            isElement: false,
                            class: 'fa-git'
                        }
                    },{
                        id: 11,
                        label: '平台',
                        animated: 'rollIn',
                        isLeaf: false,
                        icon: {
                            isElement: true,
                            class: 'el-icon-s-platform'
                        },
                        children: [{
                            id: 110,
                            label: 'Windows',
                            animated: 'fadeIn',
                            isLeaf: true,
                            path: '/windows',
                            icon: {
                                isElement: false,
                                class: 'fa-windows'
                            }
                        },{
                            id: 111,
                            label: 'Linux',
                            animated: 'fadeIn',
                            isLeaf: true,
                            path: '/linux',
                            icon: {
                                isElement: false,
                                class: 'fa-linux'
                            }
                        },{
                            id: 112,
                            label: 'Mac OS',
                            animated: 'fadeIn',
                            isLeaf: true,
                            path: '/macOs',
                            icon: {
                                isElement: false,
                                class: 'fa-apple'
                            }
                        }]
                    }]
                },{
                    id: 2,
                    label: '菜单',
                    animated: 'tada',
                    isLeaf: true,
                    path: '/menu',
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

  main {
    padding: 10px;
  }
</style>
