<!--
    左侧边栏目录(父级菜单)实现, 具体说明见 LeftSideBarMenu 组件. 下面是示例数据:

    menuItem: {
      id: 1,
      label: '菜单名称',
      isLeaf: false,  // true叶子节点, false目录节点
      icon: {
          isElement: true(来自ElementUI Icon), false(来自 font-awesome),
          class: classname (ElementUI 或 font-awesome icon Class)
      },
      children:[] 子菜单
    }
-->
<template>
  <el-submenu :index="menuItem.id + ''">
    <template slot="title">
      <i v-if="menuItem.icon.isElement" :class="menuItem.icon.class"></i>
      <i v-else class="fa fa-fw fa-lg" :class="menuItem.icon.class"></i>
      <span slot="title">{{ menuItem.label }}</span>
    </template>

    <template v-if="menuItem.children.length > 0" v-for="(item) in menuItem.children">
      <left-side-bar-menu-dir v-if="!item.isLeaf" :menuItem="item"></left-side-bar-menu-dir>
      <left-side-bar-menu-item v-if="item.isLeaf" :menuItem="item"></left-side-bar-menu-item>
    </template>
  </el-submenu>
</template>

<script>
    import LeftSideBarMenuItem from './LeftSideBarMenuItem';

    export default {
        name: 'LeftSideBarMenuDir',
        props: {
            menuItem: {
                type: Object,
                required: true
            }
        },
        data() {
            return {}
        },
        components: {
            LeftSideBarMenuItem
        },
        mounted() {
        },
        created() {
            console.log('--------console menu item list ---------');
            console.log(this.menuItemList);
        },
        methods: {}
    }
</script>

<style scoped>

</style>
