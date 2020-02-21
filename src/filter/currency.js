/**
 * 货币转化过滤器
 * <a href="https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/currency.js"></a>
 * <pre>
 *    import { currency } from './currency';
 *
 *    // 全局注册过滤器
 *    Vue.filter('currency', currency);
 *
 *    // ...
 *    {{ price | currency }}
 * </pre>
 *
 * @param value 金额
 * @param currency 货币, 如 $,￥
 * @param decimals 保留小数位数, 默认保留2位
 */
const digitsRE = /(\d{3})(?=\d)/g;

export function currency(value, currency, decimals) {
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return '';

  currency = currency != null ? currency : '$';
  decimals = decimals != null ? decimals : 2;

  let covert = Math.abs(value).toFixed(decimals);
  let money = decimals
    ? covert.slice(0, -1 - decimals)
    : covert;

  let multiple = money.length % 3;
  let head = multiple > 0 ? (money.slice(0, multiple) + (money.length > 3 ? ',' : '')) : '';

  let _float = decimals ? covert.slice(-1 - decimals) : '';
  let sign = value < 0 ? '-' : '';

  return sign + currency + head + money.slice(multiple).replace(digitsRE, '$1,') + _float;
}
