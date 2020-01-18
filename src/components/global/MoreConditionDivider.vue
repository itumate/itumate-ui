<!--
    Form 表单更多条件分割线

    使用:
    import MoreConditionDivider from "./path/MoreConditionDivider";

    <more-condition-divider @showMoreConditionToggle="showMoreConditionToggle"/>

    其中: showMoreConditionToggle(doesShowMoreCondition) 函数用于父组件回调使用, 参数为 Boolean,
    可用于下步处理.
-->
<template>
  <el-col class="more-condition">
    <el-divider><span @click="showMoreConditionToggle">
      {{ showMoreConditionText }}
      <i class="bars" :class="showMoreConditionSuffixClass"></i>
    </span>
    </el-divider>
  </el-col>
</template>

<script>
    export default {
        name: 'MoreConditionDivider',
        props: {
            /*doesShowMoreCondition: {
                required: true,
                type: Boolean
            }*/
        },
        data() {
            return {
                doesShowMoreCondition: false,
                showMoreConditionText: '更多条件',
                showMoreConditionSuffixClass: 'fa fa-angle-down'
            }
        },
        methods: {
            showMoreConditionToggle() {
                this.doesShowMoreCondition = !this.doesShowMoreCondition;
                this.showMoreConditionText = this.doesShowMoreCondition ? '收起' : '更多条件';
                this.showMoreConditionSuffixClass = this.doesShowMoreCondition ? 'fa fa-angle-up' : 'fa fa-angle-down';
                console.log(this.doesShowMoreCondition, this.showMoreConditionText);
                this.$emit('showMoreConditionToggle', this.doesShowMoreCondition)
            },
        }
    }
</script>

<style scoped>

</style>
