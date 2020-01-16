const menuList = [{
  id: 1,
  label: '首页',
  animated: 'fadeIn',
  isLeaf: false,
  path: '/home',
  icon: {
    isElement: true,
    class: 'el-icon-setting'
  },
  children: [{
    id: 2,
    label: '你好, 世界',
    animated: 'tada',
    isLeaf: true,
    path: '/home/helloWorld',
    icon: {
      isElement: false,
      class: 'fa-connectdevelop'
    }
  }, {
    id: 10,
    label: 'Git',
    animated: 'fadeIn',
    isLeaf: true,
    path: '/home/git',
    icon: {
      isElement: false,
      class: 'fa-git'
    }
  }, {
    id: 11,
    label: '平台',
    animated: 'rollIn',
    isLeaf: false,
    icon: {
      isElement: true,
      class: 'el-icon-s-platform'
    },
    children: [{
      id: 110,
      label: 'Windows',
      animated: 'fadeIn',
      isLeaf: true,
      path: '/windows',
      icon: {
        isElement: false,
        class: 'fa-windows'
      }
    }, {
      id: 111,
      label: 'Linux',
      animated: 'fadeIn',
      isLeaf: true,
      path: '/linux',
      icon: {
        isElement: false,
        class: 'fa-linux'
      }
    }, {
      id: 112,
      label: 'Mac OS',
      animated: 'fadeIn',
      isLeaf: true,
      path: '/macOs',
      icon: {
        isElement: false,
        class: 'fa-apple'
      }
    }]
  }]
}, {
  id: 2,
  label: '菜单',
  animated: 'tada',
  isLeaf: true,
  path: '/home/menu',
  icon: {
    isElement: false,
    class: 'fa-connectdevelop'
  }
}];

export default menuList;
