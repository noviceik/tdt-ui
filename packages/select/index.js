// 引入组件
import tdtSelect from './src';

// 提供 install 安装方法，供按需引入
tdtSelect.install = function (Vue) {
  // 注册组件
  Vue.component(tdtSelect.name, tdtSelect);
};
// 暴露组件
export default tdtSelect;
