import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { tdtLongForm } from '../packages';
import { tdtInput } from '../packages';
import { tdtSelect } from '../packages';

Vue.use(Element);
Vue.use(tdtLongForm);
Vue.use(tdtInput);
Vue.use(tdtSelect);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
