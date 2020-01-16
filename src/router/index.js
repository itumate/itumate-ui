import Vue from 'vue'
import Router from 'vue-router'

// When your routing table is too long, you can split it into small modules.
// Like This, Then you can continue in the router file segmentation smaller modules.
import constantRoutes from "@/router/modules/router";

Vue.use(Router);

const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes
});

const router = createRouter();

// Replace Routes Dynamically
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
