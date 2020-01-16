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
    </el-container>
  </el-container>
</template>
<script>

    import LeftSideBarMenu from './leftsidebar/LeftSideBarMenu';
    import BreadcrumbNav from "./nav/BreadcrumbNav";

    // 测试菜单数据
    import menuList from "../../demo/UserAuthMenuList";

    export default {
        name: 'Home',
        components: {
            LeftSideBarMenu,
            BreadcrumbNav
        },
        data() {
            return {
                menuItemList: menuList
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
