<!--
    Element-UI Icon 选择对话框.

    使用:

    import ElementIconsDialog from "./$PATH/ElementIconsDialog";

    <template>
      <element-icons-dialog :visible.sync="elementIconVisible" @select="setIcon" :current="currentSelectIconClass"/>
    </template>

    export default {
        // ...
        data(){
            elementIconVisible: false,
            currentSelectIconClass: null
        },
        methods: {
            // 打开 icon 对话框
            openIconsDialog(){
                this.elementIconVisible = true;
                // And you can do anything
            },
            // icon 选择
            setIcon(iconSelected){
                this.elementIconVisible = false;
                // Now you get to the icon of your choice, e.g. el-icon-user
            }
        }
    }
-->
<template>
  <div class="icon-dialog">
    <el-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose" width="980px" :modal-append-to-body="false">
      <div slot="title">
        选择图标
        <el-input size="mini" :style="{width: '260px'}" v-model="key" placeholder="请输入图标名称" prefix-icon='el-icon-search' clearable></el-input>
      </div>
      <ul class="icon-ul">
        <li v-for="icon in icons"
            :key="icon" @click="onSelect(icon)"
            :class="active === icon ? 'active-item' : '' ">
          <i :class="icon"></i>
          <div>{{ icon }}</div>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>
<script>
    import elementIcon from "./json/ElementIcon.json";

    const elementIcons = elementIcon.map(name => "el-icon-" + name);

    export default {
        name: 'ElementIconsDialog',
        inheritAttrs: false,
        props: ['current'],
        data() {
            return {
                icons: elementIcons,
                active: null,
                key: ''
            }
        },
        watch: {
            key(val) {
                if (val) {
                    this.icons = elementIcons.filter(name => name.indexOf(val) > -1)
                } else {
                    this.icons = elementIcons
                }
            }
        },
        methods: {
            onOpen() {
                this.active = this.current;
                this.key = ''
            },
            onClose() {
            },
            onSelect(icon) {
                this.active = icon;
                this.$emit('select', icon);
                this.$emit('update:visible', false)
            }
        }
    }
</script>
<style scoped>
  @import "css/icon-dialog.css";
</style>
