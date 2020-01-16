<!--
    面包屑组件, 头部导航栏
-->
<template>
    <el-breadcrumb class="nav-breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :to="{ path: item.path }" :key="index">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "Breadcrumb",
        data() {
            return {
                breadcrumbList: null
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb();
            }
        },
        methods: {
            getBreadcrumb() {
              this.breadcrumbList = this.$route.matched.filter(item => item.name);
            }
        },
        created() {
            this.getBreadcrumb();
        }
    }
</script>

<style scoped>
  .nav-breadcrumb {
    font-size: 1em !important;
    line-height: 30px!important;
    margin-left: 10px!important;
  }
</style>
