import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/Home";
import HelloWorld from '@/components/HelloWorld';
import Git from "@/components/Git";

import Menu from "@/components/Menu";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      direction: '/home',
      children: [{
        path: "home",
        name: 'home',
        component: Home,
      }]
    },
    {
      path: '/helloWorld',
      name: '你好, 世界',
      component: HelloWorld
    },
    {
      path: '/git',
      name: 'Git',
      component: Git
    },
    {
      path: '/menu',
      name: '菜单',
      component: Menu
    }
  ]
});
