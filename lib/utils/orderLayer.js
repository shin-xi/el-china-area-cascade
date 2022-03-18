export function orderLayer(firstLayerOrder, oriOptions) {
  if (firstLayerOrder.length === 0) return oriOptions
  const _options = []
  const _orderHashMap = {}
  firstLayerOrder.forEach((v, i) => _orderHashMap[v] = i)
  oriOptions.forEach(v => _options[_orderHashMap[v.label]] = v)
  return _options
}
