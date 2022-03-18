import Vue from 'vue'
import { Cascader } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// import ElChinaAreaCascade from '../dist/elChinaAreaCascade.es'
import ElChinaAreaCascade from '../lib/index'

Vue.use(Cascader)
Vue.use(ElChinaAreaCascade)

new Vue({
  render: h => h(App)
}).$mount('#app')
