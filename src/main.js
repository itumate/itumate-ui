import Vue from 'vue';
import ElementUI from 'element-ui';
import VueInsProgressBar from "vue-ins-progress-bar";

// style
import './assets/css/app.css';
import './assets/css/theme/index.css';
import './assets/css/webkit.scrollbar.css';

// waves 效果
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

// font-awesome
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueInsProgressBar, {
  position: 'fixed',
  show: true,
  height: '5px'
});

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
