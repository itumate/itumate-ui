<template>
  <div class="app-wrapper">
    <el-header style="background: #42b983">
      这是头
    </el-header>
    <el-container class="app-container" style="background: antiquewhite">
        <LeftSideBarNav class="sidebar"></LeftSideBarNav>
    </el-container>
    <el-footer style="background: cadetblue">
      这是页脚
    </el-footer>
  </div>
</template>

<script>

  import LeftSideBarNav from "./LeftSideBarNav";

    export default {
        name: "Home",
        components: {
            LeftSideBarNav
        }
    }
</script>

<style scoped>

  .sidebar {
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }

  .app-wrapper {
    height: 100%;
  }

  .app-container {
    width: 100%;
    height: calc(100% - 120px);
  }

  .app-aside, .app-main {
    overflow: auto;
  }

  .app-aside {
  }
</style>
