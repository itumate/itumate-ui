<template>
  <div class="page-wrapper page-detail">
    <page-header goBackPath="/home/menu"></page-header>
    <page-body>
      <el-row :gutter="15">
        <el-form ref="elForm" :model="formData" size="medium" label-width="100px">
          <el-col :span="24">
            <el-form-item label="菜单名称" prop="label">
              <el-input v-model="formData.label" readonly prefix-icon='el-icon-menu'
                        :style="{width: '100%'}"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="版本号" prop="recover">
              <el-input v-model="formData.recover" readonly></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="权限码" prop="authorityCode">
              <el-input v-model="formData.authorityCode" readonly prefix-icon='fa fa-codepen'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单icon" prop="iconFrom">
              <el-input v-model="formData.iconFrom" readonly></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="icon样式" prop="iconClass">
              <el-input v-model="formData.iconClass" readonly prefix-icon='fa fa-bars'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单类型" prop="isLeaf">
              <el-input v-model="formData.isLeaf" readonly prefix-icon='fa fa-leaf'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单状态" prop="status">
              <el-input v-model="formData.status" readonly prefix-icon="fa fa-sliders"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="菜单URL" prop="funUrl">
              <el-input v-model="formData.funUrl" readonly prefix-icon='fa fa-chain'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建时间" prop="createTime">
              <el-date-picker type="datetime" v-model="formData.createTime" format="yyyy-MM-dd HH:mm:ss"
                              value-format="yyyy-MM-dd HH:mm:ss" readonly :style="{width: '100%'}">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="修改时间" prop="modifyTime">
              <el-date-picker type="datetime" v-model="formData.modifyTime" format="yyyy-MM-dd HH:mm:ss"
                              value-format="yyyy-MM-dd HH:mm:ss" readonly :style="{width: '100%'}"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注信息" prop="remark">
              <el-input v-model="formData.remark" readonly prefix-icon='fa fa-paint-brush'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="描述信息" prop="description">
              <el-input v-model="formData.description" type="textarea" readonly
                        :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item size="large">
                <el-button type="primary" @click="goBack" icon="fa fa-reply">返回</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    </page-body>
  </div>
</template>
<script>

    export default {
        name: 'MenuDetail',
        components: {},
        data(){
            return {
                formData: {
                    label: '',
                    recover: 0,
                    authorityCode: undefined,
                    iconFrom: 'ElementUI',
                    iconClass: undefined,
                    isLeaf: 0,
                    status: undefined,
                    funUrl: undefined,
                    createTime: '2020-01-20 11:04:06',
                    modifyTime: '2020-01-20 11:05:33',
                    remark: undefined,
                    description: undefined,
                }
            }
        },
        methods:{
          goBack(){
              this.$router.push('/home/menu');
          }
        },
        created() {
        }
    }
</script>

<style>
.page-detail input,
.page-detail textarea{
  /*border: none;*/
  /*background-color: transparent;*/
}
</style>
