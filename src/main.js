import Vue from 'vue';
import ElementUI from 'element-ui';
import VueInsProgressBar from "vue-ins-progress-bar";
import BootstrapVue  from 'bootstrap-vue';

// style
import './assets/css/app.css';
import './assets/css/webkit.scrollbar.css';

import './assets/css/theme/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// waves 效果
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';

// font-awesome
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';

import App from './App';
import router from './router';

// filter
import {currency} from './filter/currency';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(VueInsProgressBar, {
  position: 'fixed',
  show: true,
  height: '5px'
});

Vue.filter('currency', currency);

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
