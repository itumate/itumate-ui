<template>
  <el-container>
    <el-aside class="bg-fff">
      <tree
      :lazy="true"
      :showCheckbox="true"
      :treeNodes="treeNodes"
      @loadTreeNode="loadTreeNode"
      ref="tree"
      ></tree>
    </el-aside>
    <el-main class="no-padding margin-left-10 bg-fff">
      <el-row :gutter="15">
        <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
          <el-col :span="12">
            <el-form-item label="单行文本" prop="field101">
              <el-input v-model="formData.field101" placeholder="请输入单行文本" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号" prop="mobile">
              <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                        prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="级联选择" prop="field102">
              <el-cascader v-model="formData.field102" :options="field102Options" :props="field102Props"
                           :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="日期范围" prop="field103">
              <el-date-picker type="daterange" v-model="formData.field103" format="yyyy-MM-dd"
                              value-format="yyyy-MM-dd" :style="{width: '100%'}" start-placeholder="开始日期" end-placeholder="结束日期"
                              range-separator="至" clearable>
              </el-date-picker>
            </el-form-item>
          </el-col>

          <slider-toggle>
            <el-col :span="12" v-show="doesShowMoreCondition">
              <el-form-item label="手机号" prop="mobile">
                <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                          prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>
          <slider-toggle>
            <el-col :span="12" v-show="doesShowMoreCondition">
              <el-form-item label="手机号" prop="mobile">
                <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                          prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>
          <slider-toggle>
            <el-col :span="12" v-show="doesShowMoreCondition">
              <el-form-item label="手机号" prop="mobile">
                <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                          prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>
          <slider-toggle>
            <el-col :span="12" v-show="doesShowMoreCondition">
              <el-form-item label="手机号" prop="mobile">
                <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                          prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>
          <slider-toggle>
            <el-col :span="12" v-show="doesShowMoreCondition">
              <el-form-item label="手机号" prop="mobile">
                <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                          prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>
          <slider-toggle>
            <el-col :span="12" v-show="doesShowMoreCondition">
              <el-form-item label="手机号" prop="mobile">
                <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                          prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>
          <slider-toggle>
            <el-col :span="12" v-show="doesShowMoreCondition">
              <el-form-item label="手机号" prop="mobile">
                <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                          prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>
          <slider-toggle>
            <el-col :span="12" v-show="doesShowMoreCondition">
              <el-form-item label="手机号" prop="mobile">
                <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                          prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
              </el-form-item>
            </el-col>
          </slider-toggle>

          <el-col class="more-condition">
            <el-divider><span @click="showMoreCondition">{{ showMoreConditionText }}<i class="bars" :class="showMoreConditionSuffixClass"></i></span></el-divider>
          </el-col>

          <el-col class="query-btn">
            <el-form-item size="large" style="float: left;">
              <el-button type="primary" @click="submitForm">提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-col>

        </el-form>

      </el-row>

      <el-table
        stripe
        border
        header-row-class-name="header-row"
        :data="tableData"
        :height="table.innerHeight"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          width="180">
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

    import MenuData from "../../demo/MenuData";

    export default {
        name: 'Menu',
        components: {
            Tree
        },
        methods: {
            handleClick(row){
                console.log(row)
            },
            loadTreeNode(node, resolve) {
                let id = 1;
                setTimeout(() => {
                    const data = [{
                        id: id,
                        label: 'leaf' + id,
                        isLeaf: false,
                        icon: {
                            class: 'fa-user'
                        }
                    },{
                        id: Math.random(),
                        label: 'leaf' + Math.random(),
                        isLeaf: false,
                        icon: {
                            class: 'fa-user'
                        }
                    },{
                        id: Math.random(),
                        label: 'leaf' + Math.random(),
                        isLeaf: false,
                        icon: {
                            class: 'fa-user'
                        }
                    },{
                        id: Math.random(),
                        label: 'leaf' + Math.random(),
                        isLeaf: false,
                        icon: {
                            class: 'fa-user'
                        }
                    },{
                        id: Math.random(),
                        label: 'leaf' + Math.random(),
                        isLeaf: false,
                        icon: {
                            class: 'fa-user'
                        }
                    },{
                        id: Math.random(),
                        label: 'leaf' + Math.random(),
                        isLeaf: false,
                        icon: {
                            class: 'fa-user'
                        }
                    },{
                        id: Math.random(),
                        label: 'leaf' + Math.random(),
                        isLeaf: false,
                        icon: {
                            class: 'fa-user'
                        }
                    },{
                        id: Math.random(),
                        label: 'leaf' + Math.random(),
                        isLeaf: false,
                        icon: {
                            class: 'fa-user'
                        }
                    }];
                    resolve(data);
                    this.$refs.tree.setCheckedKeys([id]);
                }, 500);
            },
            submitForm() {
                this.$refs['elForm'].validate(valid => {
                    if (!valid) return false;
                })
            },
            resetForm() {
                this.$refs['elForm'].resetFields()
            },
            showMoreCondition(){
                this.doesShowMoreCondition = !this.doesShowMoreCondition;
                this.showMoreConditionText = this.doesShowMoreCondition ? '收起' : '更多条件';
                this.showMoreConditionSuffixClass = this.doesShowMoreCondition ? 'fa fa-angle-up' : 'fa fa-angle-down';
                console.log(this.doesShowMoreCondition, this.showMoreConditionText)
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
                showMoreConditionText: '更多条件',
                showMoreConditionSuffixClass: 'fa fa-angle-down',

                /* 以下为测试数据 */
                treeNodes: MenuData.treeNode,
                tableData: MenuData.tableData,
                formData: {
                    field101: undefined,
                    mobile: '',
                    field102: [],
                    field103: null,
                },
                rules: {
                    field101: [{
                        required: true,
                        message: '请输入单行文本',
                        trigger: 'blur'
                    }],
                    mobile: [{
                        required: true,
                        message: '请输入手机号',
                        trigger: 'blur'
                    }, {
                        pattern: /^1(3|4|5|7|8|9)\d{9}$/,
                        message: '手机号格式错误',
                        trigger: 'blur'
                    }],
                    field102: [{
                        required: true,
                        type: 'array',
                        message: '请至少选择一个field102',
                        trigger: 'change'
                    }],
                    field103: [{
                        required: true,
                        message: '日期范围不能为空',
                        trigger: 'change'
                    }],
                },
                field102Options: [],
                field102Props: {
                    "multiple": false
                }
            }
        }
    }
</script>

<style scoped>

</style>
