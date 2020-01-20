const constantRoutes = [
  {
    path: '/',
    meta: {
      title: '登录'
    },
    component: () => import('@/components/Login'),
  },
  {
    path: '/home',
    meta: {
      title: '首页'
    },
    component: () => import('@/components/Home'),
    children: [
      {
        path: 'helloWorld',
        meta: {
          title: '你好,世界'
        },
        component: () => import('@/components/HelloWorld')
      },
      {
        path: 'git',
        meta: {
          title: 'git'
        },
        component: () => import('@/components/Git')
      },
      {
        path: 'menu',
        meta: {
          title: '菜单'
        },
        component: () => import('@/components/menu/MenuList')
      },
      {
        path: 'menu/:id/detail',
        meta: {
          title: '菜单详情'
        },
        component: () => import('@/components/menu/MenuDetail')
      },
      {
        path: 'menu/add',
        meta: {
          title: '新增菜单'
        },
        component: () => import('@/components/menu/MenuAdd')
      }
    ]
  }
];

export default constantRoutes;
