<template>
  <el-container>
    <el-aside class="bg-fff">
      <tree
      :showCheckbox="true"
      :treeNodes="treeNodes"
      ref="tree"></tree>
    </el-aside>
    <el-main class="no-padding margin-left-10 bg-fff">
      <el-row :gutter="15">
        <el-form ref="conditionForm" :model="formData" size="medium" label-width="100px">
          <el-col :span="12">
            <el-form-item label="菜单名称" prop="menuLabel">
              <el-input v-model="formData.menuLabel" placeholder="请输入单行文本" clearable>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号" prop="mobile">
              <el-input v-model="formData.mobile" placeholder="请输入手机号"
                        :maxlength="11" show-word-limit clearable
                        prefix-icon='el-icon-mobile'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="创建日期范围" prop="createDate">
              <el-date-picker type="daterange" v-model="formData.createDate" format="yyyy-MM-dd"
                              value-format="yyyy-MM-dd" :style="{width: '100%'}" start-placeholder="开始日期" end-placeholder="结束日期"
                              range-separator="至" clearable>
              </el-date-picker>
            </el-form-item>
          </el-col>

          <slider-toggle>
            <el-col :span="12" v-show="doesShowMoreCondition">
              <el-form-item label="更多条件">
                <el-input placeholder="更多条件" clearable :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>
          <slider-toggle>
            <el-col :span="12" v-show="doesShowMoreCondition">
              <el-form-item label="更多条件">
                <el-input placeholder="更多条件" clearable :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>

          <more-condition-divider @showMoreConditionToggle="showMoreConditionToggle"/>

          <el-col class="query-btn">
            <el-form-item size="large" style="float: left;">
              <el-button type="primary" @click="submitForm">检索</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>

      <el-table stripe border
                :data="tableData"
                :height="table.innerHeight"
                header-row-class-name="header-row" >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="label" label="菜单名称"></el-table-column>
        <el-table-column prop="date" label="创建日期"></el-table-column>
        <el-table-column prop="parentLabel" label="父级菜单"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-link :underline="false"
              :type="scope.row.status === 1 ? 'success' : scope.row.status === 2 ? 'danger' : 'warning'">
              {{scope.row.statusLabel}}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" >
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>

      </el-table>

      <pagination-helper
        :background="true"
        :total="1000"
        :pageSize="10"
        :showAllLayout="true" />
    </el-main>
  </el-container>
</template>

<script>

    import Tree from "./tree/Tree";
    import MoreConditionDivider from "./global/MoreConditionDivider";

    import MenuData from "../../demo/MenuData";

    export default {
        name: 'Menu',
        components: {
            MoreConditionDivider,
            Tree
        },
        methods: {
            submitForm() {
                this.$refs['conditionForm'].validate(valid => {
                    if (!valid) return false;
                })
            },
            resetForm() {
                this.$refs['conditionForm'].resetFields()
            },
            showMoreConditionToggle(doesShowMoreCondition){
                this.doesShowMoreCondition = doesShowMoreCondition;
            },
            resizeScreen() {
                // 计算 table 尺寸, 屏幕高度 - 200(header - main.padding - content.padding) = 可用尺寸
                // table cell 大小 48px, 可用尺寸 / 48 = 可用单位
                let unit = (window.innerHeight - 200) / 48;
                this.table.innerHeight = unit * 48;
            }
        },
        created(){
            this.resizeScreen();
        },
        mounted() {
            window.onresize = () => {
                this.resizeScreen();
            };
        },
        data(){
            return{
                table: {
                    innerHeight: 0,
                },
                doesShowMoreCondition: false,

                /* 以下为测试数据 */
                treeNodes: MenuData.treeNode,
                tableData: MenuData.tableData,
                formData: {
                    menuLabel: undefined,
                    mobile: '',
                    createDate: null,
                }
            }
        }
    }
</script>

<style scoped>

</style>
