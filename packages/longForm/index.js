// 引入组件
import tdtLongForm from './src';

// 提供 install 安装方法，供按需引入
tdtLongForm.install = function (Vue) {
  // 注册组件
  Vue.component(tdtLongForm.name, tdtLongForm);
};
// 暴露组件
export default tdtLongForm;
