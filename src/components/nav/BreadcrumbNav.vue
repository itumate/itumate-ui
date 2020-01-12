<!--
    面包屑组件, 头部导航栏
-->
<template>
<!--  <div class="breadcrumb">-->
    <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbList"
        :key="index"
        @click="toPath(item.path)">
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
<!--  </div>-->
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
                let matched = this.$route.matched.filter(item => item.name);
                console.log('----');
                console.log(matched)
                this.breadcrumbList = matched;
            },
            toPath(path){
                console.log(path)
                this.$router.push(path);
            }
        },
        created() {
            this.getBreadcrumb();
        }
    }
</script>

<style scoped>

  .breadcrumb {
    line-height: 30px;
    font-size: 18px;
    margin-left: 10px;
  }
</style>
