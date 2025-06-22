import { App } from 'vue'
import YsTable from './src/table.vue'

// 为组件提供 install 方法，用于 app.use() 注册
YsTable.install = (app: App) => {
  app.component(YsTable.name, YsTable)
}

export default YsTable