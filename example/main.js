import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

// 导入组件库
import YsKnifeUiElementPlus from '../src/index'

const app = createApp(App)

// 使用ElementPlus
app.use(ElementPlus)

// 使用自定义组件库
app.use(YsKnifeUiElementPlus)

app.mount('#app')