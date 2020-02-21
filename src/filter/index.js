import {currency} from './currency';

export default (Vue) => {
  Vue.filter('currency', currency);
}
