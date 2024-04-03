// 引入组件
import tdtInput from './src';

// 提供 install 安装方法，供按需引入
tdtInput.install = function (Vue) {
  // 注册组件
  Vue.component(tdtInput.name, tdtInput);
};
// 暴露组件
export default tdtInput;
