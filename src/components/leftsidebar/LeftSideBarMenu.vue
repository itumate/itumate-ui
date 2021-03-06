<!--
    左侧边栏实现

    LeftSideBarMenuDir: 目录(父级菜单)级别组件
    LeftSideBarMenuItem: 菜单级别组件

    菜单栏数据属性:

    id: 菜单ID,
    label: 菜单名称
    isLeaf: true叶子节点, false目录节点
    icon: 菜单图标Icon, JSON 格式
    children: 子级菜单, isLeaf为true时无该属性
    icon.isElement: true(来自ElementUI Icon), false(来自 font-awesome)
    icon.class: ElementUI 或 font-awesome icon ClassName

    菜单栏示例数据:

    [{
      id: 1,
      label: '菜单名称',
      isLeaf: false,
      icon: {
          isElement: true,
          class: classname
      },
      children:[{}]
    },{
      id: 2,
      label: '菜单名称',
      isLeaf: true,
      icon: {
          isElement: false,
          class: classname
      },
    }]
-->
<template>
  <div class="lsm-container" :style="{width: sideBarWidth + 'px'}">
    <div class="lsm-expand-btn">
      <div class="lsm-mini-btn">
        <label>
          <input type="checkbox" checked="checked" @change="expandToggle">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="30"/>
            <path class="line--1" d="M0 40h62c18 0 18-20-17 5L31 55"/>
            <path class="line--2" d="M0 50h80"/>
            <path class="line--3" d="M0 60h62c18 0 18 20-17-5L31 45"/>
          </svg>
        </label>
      </div>
    </div>
    <el-menu
      class="lsm-menu scroll-bar"
      text-color="#fff"
      background-color="#263445"
      active-text-color="#409EFF"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
      :collapse="isCollapse"
      :collapse-transition="true"
      :default-active="this.$route.path">
      <template v-for="(menuItem) in menuItemList">
        <left-side-bar-menu-dir v-if="!menuItem.isLeaf" :menuItem="menuItem"></left-side-bar-menu-dir>
        <left-side-bar-menu-item v-if="menuItem.isLeaf" :menuItem="menuItem"></left-side-bar-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
    import {TweenLite} from 'gsap';

    import LeftSideBarMenuDir from "./LeftSideBarMenuDir";
    import LeftSideBarMenuItem from "./LeftSideBarMenuItem";

    export default {
        name: 'LeftSideBarMenu',
        props: {
            menuItemList: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                isCollapse: false,
                sideBarWidth: 220,    // 默认为最大宽度
                minSideBarWidth: 64,  // 菜单栏最小宽度(收缩)
                maxSideBarWidth: 220, // 菜单栏最大宽度(展开)
                collapseDuration: 0.5 // 菜单栏收缩时长(秒)
            };
        },
        components: {
            LeftSideBarMenuDir,
            LeftSideBarMenuItem
        },
        mounted() {
        },
        created() {
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            expandToggle() { // 收缩菜单
                TweenLite.to(this.$data, this.collapseDuration, {
                    sideBarWidth:
                        this.sideBarWidth === this.maxSideBarWidth
                            ? this.minSideBarWidth : this.maxSideBarWidth
                });
                this.isCollapse = !this.isCollapse;
                console.log(this.isCollapse);
            }
        }
    }
</script>


<style scoped>

  /* 容器 */
  .lsm-container {
    /*width: 220px;*/ /* 宽度使用计算得到, 默认宽度 220, 最小 60 */
    overflow: hidden; /* 不显示滚动条, 防止样式冲突 */
    height: 100% !important;
    background: #263445 !important;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* 菜单 */
  .lsm-menu {
    overflow: hidden;
    overflow-y: auto;
    border-right: none !important;
    height: calc(100% - 65px) !important;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /* ----------- 以下是菜单收缩按钮以及动画 ----------- */
  .lsm-expand-btn {
    height: 65px;
    border-bottom: 1px solid;
  }

  .lsm-mini-btn {
    height: 70px;
    width: 70px;
  }

  .lsm-mini-btn svg {
    margin: -10px 0 0 -10px;
  }

  .lsm-mini-btn input[type="checkbox"] {
    display: none;
  }

  .lsm-mini-btn path {
    fill: none;
    stroke: #ffffff;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    --length: 24;
    --offset: -38;
    stroke-dasharray: var(--length) var(--total-length);
    stroke-dashoffset: var(--offset);
    transition: all .8s cubic-bezier(.645, .045, .355, 1);
  }

  .lsm-mini-btn circle {
    fill: #fff3;
    opacity: 0;
  }

  .lsm-mini-btn label {
    top: 0;
    right: 0;
  }

  .lsm-mini-btn label:hover circle {
    opacity: 1;
  }

  .lsm-mini-btn input:checked + svg .line--1, .lsm-mini-btn input:checked + svg .line--3 {
    --length: 8.602325267;
  }

  .lsm-mini-btn .line--1, .lsm-mini-btn .line--3 {
    --total-length: 126.38166809082031;
  }

  .lsm-mini-btn .line--2 {
    --total-length: 80;
  }

  .lsm-mini-btn input:checked + svg .line--1, .lsm-mini-btn input:checked + svg .line--3 {
    --offset: -109.1770175568;
  }
</style>
