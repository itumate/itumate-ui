<!--
    EL-Tree 组件实现, 使用示例(在父组件中使用):

    <el-container>
      <tree></tree>
    </el-container>

    组件提供懒加载与全量加载实现,可以通过 lazy 属性进行控制, 为 true 时表示懒加载。
    若为懒加载则 treeNodes 无效, 实现懒加载父级组件需要提供 loadTreeNode 方法.
    在该方法中进行加载数据, 并通过 resolve(data) 进行解析. data 为树 Node 数组
    数据。

    数据格式如下:
    id: 节点key, 必须
    label: 节点名称
    isLeaf: true/false 是否为叶子节点(当为懒加载时非叶子节点点击时会调用父级 loadTreeNode 方法)
    children: [] 子节点
    icon: {} 节点前icon
    icon.isElement: true(来自ElementUI Icon), false(来自 font-awesome)
    icon.class: ElementUI 或 font-awesome icon ClassName.

    另外, 组件提供节点右击时间. 可以在父组件 mouseRightClick(data) 方法中获取节点数据.

    loadTreeNode(node, resolve): 懒加载事件, 调用父级 loadTreeNode 方法, 最后需要在父级使用 resolve([nodes]) 方法返回节点数据
    setCheckedKeys(Arr): 通过id数组设置勾选节点(必须传递 id 数组值)
    setCheckedNodes(NodeArr): 通过节点数据设置勾选节点
    resetChecked: 取消勾选全部节点
    getCheckedNodes: 获取勾选的节点数组
    getCheckedKeys: 获取勾选的节点id数组

-->
<template>
  <div class="tree-container unselect">
    <el-input class="input-text" placeholder="输入关键字进行过滤" v-model="filterText"></el-input>

    <el-tree
      ref="tree"
      node-key="id"
      class="tree scroll-bar"
      highlight-current
      :expand-on-click-node="false"
      :lazy="lazy"
      :data="treeNodes"
      :load="loadTreeNode"
      :props="defaultProps"
      :show-checkbox="showCheckbox"
      :default-expand-all="expandAllNode"
      :check-on-click-node="checkOnClickNode"
      :default-checked-keys="defaultCheckedKeys"
      :filter-node-method="filterNode">

      <!-- 自定义节点及样式 -->
      <span class="custom-tree-node" slot-scope="{ node, data }" >
        <i v-if="data.icon.isElement" :class="data.icon.class"></i>
        <i v-else class="fa fa-fw" :class="data.icon.class"></i>
        <span @dblclick="mouseDbClick(data)">{{ node.label }}</span>
      </span>

    </el-tree>
  </div>
</template>

<script>
    export default {
        name: "Tree",
        props: {
            /* 非懒加载设置树节点 */
            treeNodes: {
                type: Array,
                required: false
            },
            /* 开启懒加载, 默认false */
            lazy: {
                type: Boolean,
                required: false
            },
            /* 显示复选框, 默认false */
            showCheckbox: {
                type: Boolean,
                required: false
            },
            /* 非懒加载状态.展开全部节点, 默认false*/
            expandAllNode: {
                type: Boolean,
                required: false
            },
            /* 点击节点勾选复选框, 默认false */
            checkOnClickNode: {
                type: Boolean,
                required: false
            },
            /* 默认勾选的节点 */
            defaultCheckedKeys: {
                type: Array,
                required: false
            }
        },
        data() {
            return {
                filterText: '',
                defaultProps: {
                    label: 'label',
                    isLeaf: 'isLeaf',
                    disabled: 'disabled',
                    children: 'children'
                }
            };
        },
        watch: {
            filterText(val) {
                console.log(val);
                this.$refs.tree.filter(val);
            }
        },
        methods: {
            /* 懒加载tree数据 */
            loadTreeNode(node, resolve) {
                this.$emit('loadTreeNode', node, resolve);
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            setCheckedKeys(keysArr) {
                keysArr instanceof Array ?
                    this.$refs.tree.setCheckedKeys(keysArr)
                    : this.errMessage('错了哦，通过keys选择树节点必须传递数组哦');
            },
            setCheckedNodes(treeNodesArr) {
                treeNodesArr instanceof Array ?
                    this.$refs.tree.setCheckedNodes(treeNodesArr)
                    : this.errMessage('错了哦，通过node选择树节点必须传递数组哦');
            },
            resetChecked() {
                this.$refs.tree.setCheckedKeys([]);
            },
            getCheckedNodes() {
                return this.$refs.tree.getCheckedNodes();
            },
            getCheckedKeys() {
                return this.$refs.tree.getCheckedKeys();
            },
            /* tree节点鼠标双击事件 */
            mouseDbClick(data){
                console.log(data);
                this.$emit('treeDbClick', data);
            },
            errMessage(msg) {
                this.$message({
                    showClose: true,
                    message: msg,
                    type: 'error',
                    effect: 'dark'
                });
            }
        }
    }
</script>

<style scoped>
  .tree-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .tree {
    height: calc(100% - 52px);
  }

  .el-tree-node__content:hover .fa {
    color: #675ca7;
  }
</style>
