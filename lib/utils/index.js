import { orderLayer } from './orderLayer'
import { cutLayer } from './cutLayer'
import { configAllOptions } from './configAllOptions'

export {
  // 纯函数，根据第一层级排序数据
  orderLayer,
  // 根据传入的 level 删除多余层级
  cutLayer,
  // 配置"全部"项
  configAllOptions
}
