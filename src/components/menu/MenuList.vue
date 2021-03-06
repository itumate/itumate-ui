<template>
  <el-container>
    <el-aside class="bg-fff">
      <tree :showCheckbox="true" :treeNodes="treeNodes" ref="tree"></tree>
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
              <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable prefix-icon='el-icon-mobile'></el-input>
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
                <el-input placeholder="更多条件" :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>

          <more-condition-divider @showMoreConditionToggle="showMoreConditionToggle"/>

          <el-col class="query-btn">
            <el-form-item size="small" class="fun-btn">
              <el-button type="primary" round icon="el-icon-plus" @click="menuAdd">新增</el-button>
              <el-button type="danger" round icon="el-icon-delete">删除</el-button>
              <el-button type="primary" round icon="fa fa-share">导出</el-button>
              <el-divider direction="vertical" />
            </el-form-item>
            <el-form-item size="small" class="search-btn">
              <el-divider direction="vertical" />
              <el-button type="primary" @click="submitForm" icon="fa fa-search">检索</el-button>
              <el-button @click="resetForm" icon="fa fa-undo">重置</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>

      <el-table tooltip-effect="dark"
                :data="tableData"
                :height="table.innerHeight"
                current-row-key="id"
                @select="select"
                @select-all="selectAll"
                header-row-class-name="header-row"
                highlight-current-row>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" width="50" label="key"></el-table-column>
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
            <el-button type="text" size="small" @click="menuDetail">查看</el-button>
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

      <el-dialog custom-class="dialog" title="新增菜单" destroy-on-close :visible.sync="menuAddDialogVisible" :close-on-click-modal="false" :close-on-press-escape="false">
        <menu-add @closeDialog="closeMenuAddDialog"></menu-add>
      </el-dialog>
    <el-dialog title="菜单详情" destroy-on-close :visible.sync="menuDetailDialogVisible">
      <menu-detail></menu-detail>
    </el-dialog>
  </el-container>
</template>

<script>

  import Tree from "./../tree/Tree";
  import MoreConditionDivider from "../commons/MoreConditionDivider";

  import MenuAdd from "./MenuAdd";
  import MenuDetail from "./MenuDetail";

  import MenuData from "../../../demo/MenuData";

  export default {
    name: 'MenuList',
    components: {
      MoreConditionDivider,
      Tree,
      MenuAdd,
      MenuDetail
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
      },
      menuAdd(){
        this.menuAddDialogVisible = true;
      },
      menuDetail(){
        this.menuDetailDialogVisible = true;
      },
      closeMenuAddDialog(closed){
          this.menuAddDialogVisible = !closed;
      },
        select(selection, row){
            console.log('select', selection, row);
        },
        selectAll(selection){
            console.log('select all', selection);
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
    watch: {
      '$route'(to, form){

      }
    },
    data(){
      return{
        menuAddDialogVisible: false,
        menuDetailDialogVisible: false,
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
