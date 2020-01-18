<template>
  <div class="pagination unselect">
    <el-pagination
      :background="background"
      :total="total"
      :page-sizes="pageSizes"
      :page-size="checkPageSize"
      :current-page="currentPage"
      :layout="checkLayout">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: 'PaginationHelper',
        props: {
            background: {
                require: false,
                type: Boolean
            },
            total: {
                required: true,
                type: Number
            },
            pageSizes: {
                required: false,
                type: Array
            },
            pageSize: {
                required: false,
                type: Number
            },
            currentPage: {
                required: false,
                type: Number
            },
            layout: {
                required: false,
                type: Array
            },
            showAllLayout: {
                required: false,
                type: Boolean
            }
        },
        data() {
            return {
                defaultPageSize: 10,
                defaultLayout: ['prev', 'pager', 'next'],
                allLayout: ['total', 'sizes', 'prev', 'pager', 'next', 'jumper']
            }
        },
        computed: {
            checkPageSize() {
                return this.pageSize === null ? this.defaultPageSize : this.pageSize
            },
            checkLayout() {
                if (this.showAllLayout){
                    return this.allLayout.toString();
                }

                if (this.layout === null || this.layout === undefined) {
                    return this.defaultLayout.toString();
                }

                const layoutArr = [];
                for (let i = 0; i < this.layout.length; i++) {
                    if (this.isInArray(this.layout[i])) {
                        layoutArr.push(this.layout[i]);
                    }
                }
                return layoutArr.toString();
            }
        },
        methods: {
            isInArray(value) {
                for (let i = 0; i < this.allLayout.length; i++) {
                    if (value === this.allLayout[i]) {
                        return true;
                    }
                }
                return false;
            }
        }
    }
</script>

<style>

  .header-row th {
    background: #EBEEF5;
    border-top: 1px solid #EBEEF5;
  }

  .pagination {
    float: left;
    cursor: pointer;
    margin-top: 10px;
  }

  .pagination .el-pagination {
    height: 48px;
    padding: 10px 0;
  }

  .pagination .el-pagination .el-pager .number:hover{
    background-color: #E6E6FA;
    color: #FFF;
  }
</style>
