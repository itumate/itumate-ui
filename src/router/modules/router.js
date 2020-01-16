const constantRoutes = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/components/Login'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/components/Home'),
    children: [
      {
        path: 'helloWorld',
        name: 'helloWorld',
        component: () => import('@/components/HelloWorld')
      },
      {
        path: 'git',
        name: 'git',
        component: () => import('@/components/Git')
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/components/Menu')
      }
    ]
  }
];

export default constantRoutes;
