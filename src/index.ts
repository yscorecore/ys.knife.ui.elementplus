// 组件库入口文件
import type { App } from 'vue'

// 导入所有组件
import * as components from './components'

// 导出所有组件
export * from './components'

// 默认导出，用于全局安装
export default {
  install: (app: App) => {
    // 注册所有组件
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
    
    return app
  }
}