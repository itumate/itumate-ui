import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/Home";
import HelloWorld from '@/components/HelloWorld';
import Git from "@/components/Git";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      mate: {title: '首页'},
      direction: '/home',
      children: [{
        path: "home",
        name: 'home',
        component: Home,
      }]
    }, {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/git',
      name: 'Git',
      component: Git
    }
  ]
});
