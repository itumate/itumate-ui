<template>
  <div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-submenu index="1-4" class="animated slideInRight">
        <template slot="title">
          <i class="fa fa-fw fa-lg fa-connectdevelop"></i>
          <span slot="title">开发</span>
        </template>
        <el-menu-item index="/git" class="waves waves-effect animated rollIn">
          <template slot="title">
            <i class="fa fa-fw fa-lg fa-git"></i>
            <span slot="title">Git</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/helloWorld" class="waves-effect animated rollIn">HelloWorld</el-menu-item>
        <el-menu-item index="1-3" class="waves-effect animated rollIn">选项3</el-menu-item>
        <el-menu-item index="1-4-1" class="waves-effect animated rollIn">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2" class="waves waves-effect">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" class="waves waves-effect">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="5" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="6" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="7" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="8" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="9" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="10" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="11" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="12" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="13" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="14" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="15" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="16" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
    <el-menu-item index="17" class="waves waves-effect">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </div>
</template>

<script>
    export default {
        name: "LeftSideBarMenuItem",
        data() {
            return {};
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped>
  /* 菜单激活背景色 */
  .el-menu-item.is-active {
    background-color: rgb(30, 42, 55) !important;
  }

  /* 菜单文本标题左填充(ICON留白) */
  .el-submenu__title > span {
    padding-left: 10px !important;
  }
</style>
