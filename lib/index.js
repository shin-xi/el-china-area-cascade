import ElChinaAreaCascade from './components/ElChinaAreaCascade.vue'
import { CodeToText } from './utils/getCodeToText'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('ElChinaAreaCascade', ElChinaAreaCascade)
}

ElChinaAreaCascade.install = function (Vue) {
  Vue.component(ElChinaAreaCascade.name, ElChinaAreaCascade)

  Vue.prototype.$CodeToText = CodeToText
}

export default ElChinaAreaCascade
