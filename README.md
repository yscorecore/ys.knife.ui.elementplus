# YS Knife UI ElementPlus

基于Element Plus的Vue 3组件库，提供了一系列封装好的组件，可以更快速地构建应用界面。

## 安装

```bash
npm install ys-knife-ui-elementplus
```

## 使用

### 完整引入

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import YsKnifeUiElementPlus from 'ys-knife-ui-elementplus'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(YsKnifeUiElementPlus)
app.mount('#app')
```

### 按需引入

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { YsButton, YsTable } from 'ys-knife-ui-elementplus'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.component('YsButton', YsButton)
app.component('YsTable', YsTable)
app.mount('#app')
```

## 组件

### YsButton

基于Element Plus的Button组件封装，提供了更多的自定义选项。

```vue
<template>
  <ys-button type="primary" custom-class="my-button" @click="handleClick">按钮</ys-button>
</template>

<script setup>
const handleClick = () => {
  console.log('按钮被点击')
}
</script>
```

### YsTable

基于Element Plus的Table组件封装，集成了分页功能，使用更加便捷。

```vue
<template>
  <ys-table 
    :data="tableData" 
    :pagination="true" 
    :total="total" 
    :current-page="currentPage" 
    :page-size="pageSize"
    @page-change="handlePageChange"
    @size-change="handleSizeChange"
  >
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="age" label="年龄" />
    <el-table-column prop="address" label="地址" />
  </ys-table>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([
  { name: '张三', age: 18, address: '北京' },
  { name: '李四', age: 20, address: '上海' },
  { name: '王五', age: 22, address: '广州' }
])
const total = ref(100)
const currentPage = ref(1)
const pageSize = ref(10)

const handlePageChange = (page) => {
  currentPage.value = page
  // 加载数据...
}

const handleSizeChange = (size) => {
  pageSize.value = size
  // 加载数据...
}
</script>
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build:lib

# 运行测试
npm run test
```

## 许可证

MIT