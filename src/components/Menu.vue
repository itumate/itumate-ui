<template>
  <el-container>
    <el-aside class="bg-fff" style="">
      <tree
      :lazy="true"
      :showCheckbox="true"
      :treeNodes="treeNodes"
      @loadTreeNode="loadTreeNode"
      ref="tree"
      ></tree>
    </el-aside>
    <el-main class="no-padding margin-left-10 bg-fff">
      <hello-world></hello-world>
    </el-main>
  </el-container>
</template>

<script>

    import Tree from "./tree/Tree";

    import HelloWorld from "./HelloWorld";

    export default {
        name: "Menu",
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
                }]
            }
        }
    }
</script>

<style scoped>

</style>
