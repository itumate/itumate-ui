<!--
    左侧边栏菜单实现, 具体说明见 LeftSideBarMenu 组件. 下面是示例数据:

    menuItem: {
      id: 1,
      label: '菜单名称',
      isLeaf: true,  // true叶子节点, false目录节点
      icon: {
          isElement: true(来自ElementUI Icon), false(来自 font-awesome),
          class: classname (ElementUI 或 font-awesome icon Class)
      }
    }
-->
<template>
  <el-menu-item :index="menuItem.path" class="animated" :class="menuItem.animated" v-waves>
    <template>
      <i v-if="menuItem.icon.isElement" :class="menuItem.icon.class"></i>
      <i v-else class="fa fa-fw fa-lg" :class="menuItem.icon.class"></i>
      <span slot="title">{{ menuItem.label }}</span>
    </template>
  </el-menu-item>
</template>

<script>
    export default {
        name: 'LeftSideBarMenuItem',
        props: {
            menuItem: {
                type: Object,
                required: true
            }
        },
        data() {
            return {};
        },
        created() {
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
</style>
