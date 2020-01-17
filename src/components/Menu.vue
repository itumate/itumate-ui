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
                              range-separator="至" clearable></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item size="large">
              <el-button type="primary" @click="submitForm">提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>

    </el-main>
  </el-container>
</template>

<script>

    import Tree from "./tree/Tree";

    import HelloWorld from "./HelloWorld";

    export default {
        name: 'Menu',
        components: {
            Tree,
            HelloWorld
        },
        methods: {
            loadTreeNode(node, resolve) {
                // let id = Math.random();
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
                    if (!valid) return
                    // TODO 提交表单
                })
            },
            resetForm() {
                this.$refs['elForm'].resetFields()
            },
            getField102Options() {
                // TODO 发起请求获取数据
                this.field102Options
            }
        },
        data(){
            return{
                treeNodes: [{
                    id: 1,
                    isLeaf: false,
                    label: '系统设置',
                    icon: {
                        class: 'fa-cog'
                    },
                    children: [{
                        id: 10,
                        isLeaf: false,
                        label: '菜单管理',
                        icon: {
                            class: 'fa-align-justify'
                        }
                    }, {
                        id: 11,
                        isLeaf: false,
                        label: '用户管理',
                        icon: {
                            class: 'fa-user'
                        }
                    }]
                }],
                /* 测试 */
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
                },
            }
        }
    }
</script>

<style scoped>

</style>
