<template>
  <el-container class="dialog-container">
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-col :span="24">
          <el-form-item label="菜单名称" prop="label">
            <el-input v-model="formData.label" placeholder="请输入菜单名称" show-word-limit clearable
                      prefix-icon='el-icon-menu' :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="版本号" prop="recover">
            <el-input-number v-model="formData.recover" placeholder="版本号"
                             :precision="2" :step="0.1" :min="0.01"
                             :style="{width: '100%'}"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排序" prop="sort">
            <el-select v-model="formData.sort" placeholder="请选择排序方式" clearable :style="{width: '100%'}">
              <el-option label="最前" value="ASC"></el-option>
              <el-option label="最后" value="DESC"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="icon来源" prop="iconFrom">
            <el-select v-model="formData.iconFrom" placeholder="请选择菜单icon来源" clearable :style="{width: '100%'}">
              <el-option v-for="(item, index) in iconFromOptions" :key="index" :label="item.label"
                         :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="icon样式" prop="iconClass">
            <el-input v-model="formData.iconClass" placeholder="请输入icon样式Class" readonly="" prefix-icon='fa fa-bars'
                      :style="{width: '100%'}">
              <el-button icon="el-icon-thumb" @click="openIconsDialog" slot="append">选择</el-button>
            </el-input>
          </el-form-item>

        </el-col>
        <el-col :span="12">
          <el-form-item label="菜单类型" prop="isLeaf">
            <el-select v-model="formData.isLeaf" placeholder="请选择菜单类型" clearable :style="{width: '100%'}">
              <el-option v-for="(item, index) in isLeafOptions" :key="index" :label="item.label"
                         :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="菜单状态" prop="status">
            <el-select v-model="formData.status" placeholder="请选择菜单状态" clearable :style="{width: '100%'}">
              <el-option v-for="(item, index) in statusOptions" :key="index" :label="item.label"
                         :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="父级菜单" prop="parents">
            <el-cascader v-model="formData.parents" :options="parentsOptions" filterable
                         :style="{width: '100%'}" placeholder="请选择父级菜单" clearable
                         :props="parentsProps"></el-cascader>
          </el-form-item>
        </el-col>
        <slider-toggle>
          <el-col :span="24" v-show="formData.isLeaf">
            <el-form-item label="菜单URL" prop="funUrl">
              <el-input v-model="formData.funUrl" placeholder="请输入菜单URL" clearable prefix-icon='fa fa-chain'
                        :style="{width: '100%'}"></el-input>
            </el-form-item>
          </el-col>
        </slider-toggle>
        <el-col :span="24">
          <el-form-item label="备注信息" prop="remark">
            <el-input v-model="formData.remark" placeholder="请输入备注信息" clearable prefix-icon='el-icon-question'
                      :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="描述信息" prop="description">
            <el-input v-model="formData.description" type="textarea" placeholder="请输入描述信息"
                      :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="danger" plain @click="closeDialog" icon="el-icon-close">关闭</el-button>
            <el-button type="primary" @click="submitForm" icon="el-icon-check">提交</el-button>
            <el-button type="warning" plain @click="resetForm" icon="el-icon-refresh-left">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <element-icons-dialog :modal="false" :visible.sync="elementIconVisible" @select="setIcon" :current="formData.iconClass"/>
    <font-awesome-icons-dialog :modal="false" :visible.sync="fontAwesomeIconVisible" @select="setIcon" :current="formData.iconClass"></font-awesome-icons-dialog>
  </el-container>
</template>

<script>

  import ElementIconsDialog from "../icondialog/ElementIconsDialog";
  import FontAwesomeIconsDialog from "../icondialog/FontAwesomeIconsDialog";

    export default {
        name: 'MenuDetail',
        components: {
            FontAwesomeIconsDialog,
            ElementIconsDialog
        },
        data() {
            return {
                elementIconVisible: false,
                fontAwesomeIconVisible: false,
                formData: {
                    label: '',
                    recover: 0.01,
                    sort: undefined,
                    iconFrom: undefined,
                    iconClass: undefined,
                    isLeaf: undefined,
                    status: undefined,
                    parents: [1, 11],
                    funUrl: undefined,
                    remark: undefined,
                    description: undefined,
                },
                rules: {
                    label: [{
                        required: true,
                        message: '请输入菜单名称',
                        trigger: 'blur'
                    }, {
                        pattern: /^[\w\u4e00-\u9fa5-]+$/,
                        message: '请输入菜单名称，菜单名称只能包含中文英文或-',
                        trigger: 'blur'
                    }],
                    recover: [{
                        required: true,
                        message: '请输入版本号',
                        trigger: 'blur'
                    }],
                    sort: [{
                        required: true,
                        message: '请选择排序方式',
                        trigger: 'blur'
                    }],
                    iconFrom: [{
                        required: true,
                        message: '请选择菜单icon来源',
                        trigger: 'change'
                    }],
                    iconClass: [{
                        required: true,
                        message: '请输入icon样式Class',
                        trigger: 'change'
                    }],
                    isLeaf: [{
                        required: true,
                        message: '请选择菜单类型',
                        trigger: 'change'
                    }],
                    status: [{
                        required: true,
                        message: '请选择菜单状态',
                        trigger: 'change'
                    }],
                    parents: [{
                        required: true,
                        type: 'array',
                        message: '请选择父级菜单',
                        trigger: 'change'
                    }],
                    funUrl: [],
                    remark: [],
                    description: []
                },
                iconFromOptions: [{
                    "label": "ElementUI",
                    "value": "ElementUI"
                }, {
                    "label": "FontAwesome",
                    "value": "FontAwesome"
                }],
                isLeafOptions: [{
                    "label": "父级菜单",
                    "value": 0
                }, {
                    "label": "叶子节点",
                    "value": 1
                }],
                statusOptions: [{
                    "label": "启用",
                    "value": 1
                }, {
                    "label": "禁用",
                    "value": 0
                }],
                parentsOptions: [{
                    "label": "系统设置",
                    "value": 1,
                    "id": 100,
                    "children": [{
                        "label": "菜单管理",
                        "value": 10,
                        "id": 101
                    }, {
                        "label": "用户管理",
                        "value": 11,
                        "id": 102
                    }]
                }],
                parentsProps: {
                    lazy: false,
                    lazyLoad(node, resolve) {
                        // 懒加载
                        resolve([{}]);
                    }
                },
            }
        },
        methods: {
            closeDialog() {
                this.$emit('closeDialog', true);
            },
            submitForm() {
                this.$refs['elForm'].validate(valid => {
                    if (!valid) return;
                    // TODO 提交表单
                })
            },
            resetForm() {
                this.$refs['elForm'].resetFields()
            },
            openIconsDialog() {
                if (!this.formData.iconFrom) {
                    this.$message({
                        type: 'warning',
                        enter: true,
                        showClose: true,
                        message: '请先选择菜单icon来源哦 ~'
                    });
                    return false;
                }
                if (this.formData.iconFrom === 'ElementUI'){
                    this.elementIconVisible = true;
                } else { // FontAwesome
                    this.fontAwesomeIconVisible = true;
                }
            },
            setIcon(iconClass) {
               /* if (this.formData.iconFrom === 'ElementUI'){
                    this.elementIconVisible = false;
                } else { // FontAwesome
                  this.elementIconVisible = false;
                    this.fontAwesomeIconVisible = false;
                }*/
                this.elementIconVisible = false;
                this.fontAwesomeIconVisible = false;
                this.formData.iconClass = iconClass;
            }
        },
        watch:{
            formData: {
                deep: true,
                handler(val){
                    if (val.isLeaf === 1){
                        this.rules.funUrl = [{
                            required: true,
                            message: '请输入菜单URL',
                            trigger: 'blur'
                        }, {
                            pattern: /^(\/)[\w@?^=%&\/~+#-]+$/,
                            message: '菜单URL错误，示例：/vue/#/a=1&b=2 , 反例: ....',
                            trigger: 'blur'
                        }];
                    } else {
                        this.rules.funUrl = [];
                    }
                }
            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
