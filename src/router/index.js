import Vue from 'vue'
import Router from 'vue-router'

import Login from "@/components/Login";
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
      component: Login,
    }
  ]
});
