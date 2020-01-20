<!--
    FontAwesome Icon 选择对话框.

    使用:

    import FontAwesomeIconsDialog from "./$PATH/FontAwesomeIconsDialog";

    <template>
      <font-awesome-icons-dialog :visible.sync="fontAwesomeIconVisible" @select="setIcon" :current="currentSelectIconClass"/>
    </template>

    export default {
        // ...
        data(){
            fontAwesomeIconVisible: false,
            currentSelectIconClass: null
        },
        methods: {
            // 打开 icon 对话框
            openIconsDialog(){
                // And you can do anything
                this.fontAwesomeIconVisible = true;
            },
            // icon 选择
            setIcon(iconSelected){
                this.fontAwesomeIconVisible = false;
                // Now you get to the icon of your choice, e.g. fa fa-music
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
            :key="icon.key" @click="onSelect(icon.key)"
            :class="active === icon.key ? 'active-item' : '' ">
          <i :class="icon.key"></i>
          <div>{{ icon.name }}</div>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
    import fontAwesomeIcons from "./json/FontAwesomeIcon.json";

    export default {
        name: 'FontAwesomeIconsDialog',
        inheritAttrs: false,
        props: ['current'],
        data() {
            return {
                icons: fontAwesomeIcons,
                active: null,
                key: ''
            }
        },
        watch: {
            key(val) {
                if (val) {
                    this.icons = fontAwesomeIcons.filter(icon => icon.name.indexOf(val) > -1)
                } else {
                    this.icons = fontAwesomeIcons
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
  @import 'css/icon-dialog.css';
</style>
