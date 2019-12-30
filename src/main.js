import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/vant.js'
import router from './router'
import  {post,get,getParamCommon} from  './utils/https'

Vue.config.productionTip = false
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$getParamCommon = getParamCommon;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

