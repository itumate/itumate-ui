// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';

// style
import './assets/css/webkit.scrollbar.css';
import './assets/css/app.css';
import './assets/theme/index.css';


// waves 效果
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'

// font-awesome
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css'

import App from './App'
import router from './router'

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
