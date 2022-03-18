import data from '../data'

export default {
  props: {
    // 以下为组件原生配置
    options: {
      type: Array,
      default() {
        return JSON.parse(JSON.stringify(data.options))
      }
    },
    props: {
      type: Object
    },
    size: {
      type: String
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showAllLevel: {
      type: Boolean,
      default: true
    },
    collapseTags: {
      type: Boolean,
      default: false
    },
    separator: {
      type: String,
      default: '/'
    },
    filterable: {
      type: Boolean
    },
    filterMethod: {
      type: Function
    },
    debounce: {
      type: Number
    },
    beforeFilter: {
      type: Function
    },
    properClass: {
      type: String
    }
  },
  methods: {
    handle(type, val) {
      this.$emit(type, val)
    },
    getCheckedNodes: Function(),
    clearCheckedNodes: Function()
  },
  mounted() {
    this.getCheckedNodes = this.$refs.elCascader.getCheckedNodes
    this.clearCheckedNodes = this.$refs.elCascader.clearCheckedNodes
  },
  destroyed() {
    this.getCheckedNodes = null
    this.clearCheckedNodes = null
  }
}

