export function configAllOptions(options, layerAllOptions, fatherLabel = '') {
  if (layerAllOptions.length === 0) return
  const _layerAllOptions = [...layerAllOptions]
  const layer = options
  const config = _layerAllOptions.shift()
  if (config.show) {
    if (config.useFatherLabel) {
      if (fatherLabel) {
        layer.unshift({
          label: `全${fatherLabel}`,
          value: ''
        })
      }
    } else {
      layer.unshift({
        label: config.label,
        value: ''
      })
    }
  }
  options.forEach(option => {
    if (option.children) {
      configAllOptions(option.children, _layerAllOptions, option.label)
    }
  })
}
