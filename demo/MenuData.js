const tableData = [{
  date: '2016-05-03',
  label: '系统设置',
  parentLabel: '-',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-02',
  label: '菜单管理',
  parentLabel: '系统设置',
  status: 2,
  statusLabel: '禁用'
}, {
  date: '2016-05-04',
  label: '用户管理',
  parentLabel: '系统设置',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}, {
  date: '2016-05-04',
  label: '示例菜单',
  parentLabel: '示例菜单',
  status: 1,
  statusLabel: '启用'
}];


const treeNode = [{
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
}];

function generateChildrenNodes(node) {
  debugger
  if (node === null || node.id === 0){
    return treeNode;
  }
  let id = node.id * 10;
  let label = node.label;

  const nodes = [];
  for (let index in 10){
    nodes.push({
      id: id + index,
      isLeaf: false,
      label: label + '-' + id + index,
      icon: {
        class: 'fa-spinner'
      }
    })
  }
  return nodes;
}

export default {
  tableData,
  treeNode,
  generateChildrenNodes
}
