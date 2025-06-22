<template>
  <div class="example-container">
    <h1>YS Knife UI ElementPlus 示例</h1>
    
    <section>
      <h2>YsButton 组件</h2>
      <div class="component-demo">
        <ys-button type="primary" @click="handleButtonClick">主要按钮</ys-button>
        <ys-button type="success">成功按钮</ys-button>
        <ys-button type="warning">警告按钮</ys-button>
        <ys-button type="danger">危险按钮</ys-button>
      </div>
    </section>
    
    <section>
      <h2>YsTable 组件</h2>
      <div class="component-demo">
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
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 按钮示例
const handleButtonClick = () => {
  alert('按钮被点击了！')
}

// 表格示例
const tableData = ref([
  { name: '张三', age: 18, address: '北京' },
  { name: '李四', age: 20, address: '上海' },
  { name: '王五', age: 22, address: '广州' },
  { name: '赵六', age: 24, address: '深圳' },
  { name: '钱七', age: 26, address: '杭州' },
])
const total = ref(100)
const currentPage = ref(1)
const pageSize = ref(10)

const handlePageChange = (page) => {
  currentPage.value = page
  console.log('页码变更为:', page)
  // 实际应用中这里会加载新数据
}

const handleSizeChange = (size) => {
  pageSize.value = size
  console.log('每页条数变更为:', size)
  // 实际应用中这里会加载新数据
}
</script>

<style scoped>
.example-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

section {
  margin-bottom: 30px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebeef5;
}

.component-demo {
  margin-top: 20px;
}

.component-demo .el-button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>