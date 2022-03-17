<template>
  <el-cascader
      ref="elCascader"
      v-model="value"
      :options="serviceOptions"
      :props="props"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      :show-all-levels="showAllLevel"
      :collapse-tags="collapseTags"
      :separator="separator"
      :filterable="filterable"
      :filter-method="filterMethod"
      :debounce="debounce"
      :before-filter="beforeFilter"
      :properClass="properClass"
      @change="val=>handle('change',val)"
      @expand-change="val=>handle('expand-change',val)"
      @blur="val=>handle('blur',val)"
      @focus="val=>handle('focus',val)"
      @visible-change="val=>handle('visible-change',val)"
      @remove-tag="val=>handle('remove-tag',val)"
  />
</template>

<script>
import elCascadeSettings from './elCascadeSettings'
import firstLayerOrder from '../data/firstLayerOrder'
import { orderLayer, cutLayer, configAllOptions } from '../utils/index'

export default {
  name: 'ElChinaAreaCascade',
  mixins: [elCascadeSettings],
  props: {
    locationCodes: {
      type: Array,
      default() {
        return []
      }
    },
    level: {
      type: Number,
      default: 3,
      validator(val) {
        return (val >= 1 && Number.isInteger(val))
      }
    },
    firstLayerOrder: {
      type: Array,
      default() {
        return firstLayerOrder
      }
    },
    layerAllOptions: {
      type: Array,
      default() { // show: boolean, label: '全部'
        return []
      }
    }
  },
  model: {
    prop: 'locationCodes',
    event: 'change'
  },
  data() {
    return {
      value: this.locationCodes
    };
  },
  computed: {
    serviceOptions() {
      try {
        if (this.firstLayerOrder.length === 0) return this.options
        // 排序处理
        const _options = this.orderLayer(this.firstLayerOrder, this.options)

        // 层级处理
        this.cutLayer(_options, this.level)

        // "全部项"处理
        this.configAllOptions(_options, this.layerAllOptions)
        return _options
      } catch (e) {
        console.warn('【elChinaAreaCascade】: 未知原因无法处理数据源')
        return this.options
      }
    }
  },
  methods: {
    clear() {
      this.$emit('change', [])
    },
    getLocationNames() {
      const selectedList = this.getCheckedNodes()
      return selectedList.map(v => v.pathLabels)
    },
    orderLayer,
    cutLayer,
    configAllOptions
  }
}
</script>
