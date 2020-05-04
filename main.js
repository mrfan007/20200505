//导入Vue.js
import Vue from 'vue'

//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//在创建Vue实例之前，要将element-ui 插件加入到Vue中
Vue.use(ElementUI);
//导入App.vue根组件
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App), //渲染App根组件
}).$mount('#app')
