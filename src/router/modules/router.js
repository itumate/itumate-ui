const constantRoutes = [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: () => import('@/components/Login'),
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页2'
    },
    component: () => import('@/components/Home'),
    children: [
      {
        path: 'helloWorld',
        name: 'helloWorld',
        meta: {
          title: '你好,世界'
        },
        component: () => import('@/components/HelloWorld')
      },
      {
        path: 'git',
        name: 'git',
        meta: {
          title: 'git'
        },
        component: () => import('@/components/Git')
      },
      {
        path: 'menu',
        name: 'menu',
        meta: {
          title: '菜单'
        },
        component: () => import('@/components/Menu')
      }
    ]
  }
];

export default constantRoutes;
