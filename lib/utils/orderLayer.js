export function orderLayer(firstLayerOrder, oriOptions) {
  const _options = []
  const _orderHashMap = {}
  firstLayerOrder.forEach((v, i) => _orderHashMap[v] = i)
  oriOptions.forEach(v => _options[_orderHashMap[v.label]] = v)
  return _options
}
