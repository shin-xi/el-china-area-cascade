import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'

export default {
  plugins: [createVuePlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.js'),
      name: 'elChinaAreaCascade',
      formats: ['es', 'umd', 'iife'],
      fileName: (format) => `elChinaAreaCascade.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}
