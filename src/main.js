import Vue from 'vue';
import ElementUI from 'element-ui';
import VueInsProgressBar from "vue-ins-progress-bar";

// style
import './assets/css/app.css';
import './assets/css/app-progress.css'
import './assets/css/theme/index.css';
import './assets/css/webkit.scrollbar.css';

// font-awesome
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';

import App from './App';
import router from './router';

// Global Component
import SliderToggle from "@/components/global/SliderToggle";
import PaginationHelper from "@/components/global/PaginationHelper";

Vue.component('SliderToggle', SliderToggle);
Vue.component('PaginationHelper', PaginationHelper);

// filter
import {currency} from './filter/currency';

Vue.config.productionTip = false;

Vue.use(ElementUI);
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
