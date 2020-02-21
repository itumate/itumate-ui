/**
 * Vue 指令
 *
 * 在 main.js 文件中导入该文件:
 *
 * <pre>
 *   import directive from "@/directive";
 *
 *   // 使用
 *   Vue.use(directive);
 * </pre>
 */

// 水波纹
import VueWaves from "@/directive/waves/waves";

export default (Vue) => {
  Vue.use(VueWaves)
}
