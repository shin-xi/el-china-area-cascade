export function cutLayer(options, level) {
  options.forEach(option => {
    if (level === 1) {
      delete option.children
    } else {
      cutLayer(option.children, level - 1)
    }
  })
}
