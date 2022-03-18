ElChinaAreaCascade

## 介绍

该组件适用于使用vue2、elementui的后台管理系统中，对省市区选择基于的elementui级联组件 cascade结合业务需求进行了封装组合，包含了cascade原始功能，并直接提供业务需要的省市区数据，同时也扩展了若干方法。

### 链接

国家统计局: http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/

demo: https://codepen.io/shin-xi/pen/RwxrwGO


### 安装

```shell
npm i -S el-china-area-cascade
```



### 使用

```vue
// 全局引用
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

// 局部引用
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



### 扩展属性

| 属性名称        | 数据类型       | 说明                                                         |
| --------------- | -------------- | ------------------------------------------------------------ |
| level           | int:范围大于1  | 按照level截取数据源层级                                      |
| firstLayerOrder | String[]       | 自定义按照顺序展示哪些些省，比如：['广东省', '浙江省', '江苏省', '北京', '上海', '福建省', '重庆', '河南省', '安徽省', '湖南省', '四川省', '陕西省', '湖北省', '江西省', '天津', '山西省', '辽宁省', '河北省', '黑龙江省', '广西壮族自治区', '海南省', '吉林省', '山东省', '贵州省', '云南省', '西藏自治区', '内蒙古自治区', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区'] |
| layerAllOptions | layAllOption[] | 属性说明：show （是否在该层级顶部展示全部项），label（全部项展示内容，useFatherLabel不为true），useFatherLabel为true时全部项的label自动取父级的label值并在前面加“全”子，比如，全广州市 |



### 扩展方法

| 方法名           | 返回值类型 | 说明                     |
| ---------------- | ---------- | ------------------------ |
| clear            | void       | 清空选项值               |
| getLocationNames | Sting[]    | 获取选中codes对应的names |



### 特别说明

- cascade组件的属性和方法等请参考element-ui中的cascade组件；
- 请勿修改数据源格式，属性内容键名请按照 label、value、children；



## 版本信息

​	之后版本待增加功能，指定属性设置disabled属性

- V1.0.5

  修改若干bug

- V1.0.0

  项目初始版本

