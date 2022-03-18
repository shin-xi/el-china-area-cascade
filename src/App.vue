<template>
  <div>
    <div>
      展示到省：
      <el-china-area-cascade
          ref="elChinaAreaCascade"
          v-model="locationCodes"
          size="mini"
          :level="1"
          :layerAllOptions="layerAllOptions"
          @change="change"
      />
    </div>
    <br />
    <div>
      展示到市：
      <el-china-area-cascade
          ref="elChinaAreaCascade"
          v-model="locationCodes"
          size="mini"
          :level="2"
          :layerAllOptions="layerAllOptions"
          @change="change"
      />
    </div>
    <br />
    <div>
      展示到区：
      <el-china-area-cascade
          ref="elChinaAreaCascade"
          v-model="locationCodes"
          size="mini"
          :level="3"
          :layerAllOptions="layerAllOptions"
          @change="change"
      />
    </div>
  </div>
</template>

<script>
// import elChinaAreaCascade from '../lib/components/ElChinaAreaCascade.vue'
// import elChinaAreaCascade from '../dist/elChinaAreaCascade.es'

export default {
  name: 'App',
  // components: {
  //   elChinaAreaCascade
  // },
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
  },
  methods: {
    change(v) {
      // console.log(v)
    }
  }
}
</script>
