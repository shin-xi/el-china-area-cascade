import dataSource from '../data/dataSource'
const _CodeToText = {}

function getCodeToText(dataSource) {
  dataSource.forEach(layer => {
    _CodeToText[layer.value] = layer.label
    if (layer.children) {
      getCodeToText(layer.children)
    }
  })
}

getCodeToText(dataSource)

export const CodeToText = _CodeToText
