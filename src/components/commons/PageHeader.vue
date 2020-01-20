<template>
  <div class="page-header">
    <el-page-header @back="goBack" :content="content"></el-page-header>
  </div>
</template>

<script>
    export default {
        name: 'PageHeader',
        props: {
            goBackPath: {
                required: true,
                type: String
            },
            content: {
                required: false,
                type: String
            }
        },
        data() {
            return {}
        },
        methods: {
            goBack() {
                this.$router.push({path: this.goBackPath});
            }
        },
        /*beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.goBackPath = from.path;
            })
        }*/
    }
</script>

<style>
  .page-header {
    border-bottom: 1px solid #ececec;
  }

  .page-header .el-page-header__left:hover {
    color: #675ca7;
  }

  .page-header .el-page-header__content {
    color: #606266;
  }
</style>
