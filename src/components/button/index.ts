import { App } from 'vue'
import YsButton from './src/button.vue'

// 为组件提供 install 方法，用于 app.use() 注册
YsButton.install = (app: App) => {
  app.component(YsButton.name, YsButton)
}

export default YsButton