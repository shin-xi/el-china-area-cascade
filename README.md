ElChinaAreaCascade

## 介绍

该组件适用于使用vue2、elementui的后台管理系统中，对省市区选择基于的elementui级联组件 cascade结合业务需求进行了封装组合，包含了cascade原始功能，并直接提供业务需要的省市区数据，同时也扩展了若干方法。

### 链接

国家统计局: http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/

demo: https://codepen.io/shin-xi/pen/RwxrwGO


### 安装

```shell
npm install -S el-china-area-cascade
```



### 使用

```vue
// 全局
import Vue from 'vue'
import { Cascader } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import ElChinaAreaCascade from 'elChinaAreaCascade.es'

Vue.use(Cascader)
Vue.use(ElChinaAreaCascade)

new Vue({
render: h => h(App)
}).$mount('#app')

// 局部
<template>
  <el-china-area-cascade
      ref="elChinaAreaCascade"
      v-model="locationCodes"
      size="mini"
      :level="3"
      :layerAllOptions="layerAllOptions"
      @change="change"
  />
</template>

<script>
import elChinaAreaCascade from 'ElChinaAreaCascade.vue'

export default {
  name: 'App',
  components: {
    elChinaAreaCascade
  },
  data() {
    return {
      locationCodes: [],
      locationText: [],
      layerAllOptions: [
        {
          show: true,
          label: '全国',
          useFatherLabel: false
        },
        {
          show: true,
          label: '全市',
          useFatherLabel: true
        },
        {
          show: true,
          label: '全区',
          useFatherLabel: true
        }
      ]
    }
  }
}
</script>

  
        
```



### 扩展方法

| 方法名           | 返回值类型 | 说明                     |
| ---------------- | ---------- | ------------------------ |
| clear            | void       | 清空选项值               |
| getLocationNames | Sting[]    | 获取选中codes对应的names |



### 特别说明

- cascade组件的属性和方法等请参考element-ui中的cascade组件；
- 请勿修改数据源格式，属性内容键名请按照 label、value、children；



## 版本信息

- V1.0.1

  更新demo链接

- V1.0.0

  项目初始版本

