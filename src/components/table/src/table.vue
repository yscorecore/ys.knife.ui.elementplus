<template>
  <div class="ys-table-container">
    <el-table
      :data="data"
      :height="height"
      :max-height="maxHeight"
      :stripe="stripe"
      :border="border"
      :size="size"
      :fit="fit"
      :show-header="showHeader"
      :highlight-current-row="highlightCurrentRow"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :cell-class-name="cellClassName"
      :cell-style="cellStyle"
      :header-row-class-name="headerRowClassName"
      :header-row-style="headerRowStyle"
      :header-cell-class-name="headerCellClassName"
      :header-cell-style="headerCellStyle"
      :row-key="rowKey"
      :empty-text="emptyText"
      :default-expand-all="defaultExpandAll"
      :tree-props="treeProps"
      :load="load"
      :lazy="lazy"
      :class="customClass"
      @select="handleSelect"
      @select-all="handleSelectAll"
      @selection-change="handleSelectionChange"
      @cell-click="handleCellClick"
      @row-click="handleRowClick"
      @sort-change="handleSortChange"
      @filter-change="handleFilterChange"
      @current-change="handleCurrentChange"
      @header-click="handleHeaderClick"
    >
      <slot></slot>
      <template #empty v-if="$slots.empty">
        <slot name="empty"></slot>
      </template>
      <template #append v-if="$slots.append">
        <slot name="append"></slot>
      </template>
    </el-table>
    
    <!-- 分页组件 -->
    <div v-if="pagination" class="ys-table-pagination">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="pageSizes"
        :layout="paginationLayout"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue'
import { ElTable, ElPagination } from 'element-plus'
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'

export default defineComponent({
  name: 'YsTable',
  components: {
    ElTable,
    ElPagination
  },
  props: {
    // 表格数据
    data: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    // 表格高度
    height: {
      type: [String, Number],
      default: ''
    },
    // 表格最大高度
    maxHeight: {
      type: [String, Number],
      default: ''
    },
    // 是否为斑马纹表格
    stripe: {
      type: Boolean,
      default: false
    },
    // 是否带有边框
    border: {
      type: Boolean,
      default: false
    },
    // 表格尺寸
    size: {
      type: String as PropType<'large' | 'default' | 'small'>,
      default: 'default'
    },
    // 列的宽度是否自撑开
    fit: {
      type: Boolean,
      default: true
    },
    // 是否显示表头
    showHeader: {
      type: Boolean,
      default: true
    },
    // 是否高亮当前行
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    // 行的 className
    rowClassName: {
      type: [Function, String],
      default: ''
    },
    // 行的 style
    rowStyle: {
      type: [Function, Object],
      default: () => ({})
    },
    // 单元格的 className
    cellClassName: {
      type: [Function, String],
      default: ''
    },
    // 单元格的 style
    cellStyle: {
      type: [Function, Object],
      default: () => ({})
    },
    // 表头行的 className
    headerRowClassName: {
      type: [Function, String],
      default: ''
    },
    // 表头行的 style
    headerRowStyle: {
      type: [Function, Object],
      default: () => ({})
    },
    // 表头单元格的 className
    headerCellClassName: {
      type: [Function, String],
      default: ''
    },
    // 表头单元格的 style
    headerCellStyle: {
      type: [Function, Object],
      default: () => ({})
    },
    // 行数据的 Key
    rowKey: {
      type: [Function, String],
      default: ''
    },
    // 空数据时显示的文本
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    // 是否默认展开所有行
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    // 树形数据配置
    treeProps: {
      type: Object,
      default: () => ({
        hasChildren: 'hasChildren',
        children: 'children'
      })
    },
    // 加载子节点数据的函数
    load: {
      type: Function,
      default: null
    },
    // 是否懒加载子节点数据
    lazy: {
      type: Boolean,
      default: false
    },
    // 自定义类名
    customClass: {
      type: String,
      default: ''
    },
    
    // 分页相关属性
    pagination: {
      type: Boolean,
      default: false
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array as PropType<number[]>,
      default: () => [10, 20, 30, 50]
    },
    paginationLayout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    total: {
      type: Number,
      default: 0
    }
  },
  emits: [
    'select',
    'select-all',
    'selection-change',
    'cell-click',
    'row-click',
    'sort-change',
    'filter-change',
    'current-change',
    'header-click',
    'size-change',
    'page-change'
  ],
  setup(props, { emit }) {
    // 处理表格事件
    const handleSelect = (selection: any[], row: any) => {
      emit('select', selection, row)
    }

    const handleSelectAll = (selection: any[]) => {
      emit('select-all', selection)
    }

    const handleSelectionChange = (selection: any[]) => {
      emit('selection-change', selection)
    }

    const handleCellClick = (row: any, column: TableColumnCtx<any>, cell: HTMLElement, event: Event) => {
      emit('cell-click', row, column, cell, event)
    }

    const handleRowClick = (row: any, column: TableColumnCtx<any>, event: Event) => {
      emit('row-click', row, column, event)
    }

    const handleSortChange = (params: { column: TableColumnCtx<any>, prop: string, order: string }) => {
      emit('sort-change', params)
    }

    const handleFilterChange = (filters: any) => {
      emit('filter-change', filters)
    }

    const handleCurrentChange = (currentRow: any, oldCurrentRow: any) => {
      emit('current-change', currentRow, oldCurrentRow)
    }

    const handleHeaderClick = (column: TableColumnCtx<any>, event: Event) => {
      emit('header-click', column, event)
    }

    // 处理分页事件
    const handleSizeChange = (size: number) => {
      emit('size-change', size)
    }

    const handlePageChange = (page: number) => {
      emit('page-change', page)
    }

    return {
      handleSelect,
      handleSelectAll,
      handleSelectionChange,
      handleCellClick,
      handleRowClick,
      handleSortChange,
      handleFilterChange,
      handleCurrentChange,
      handleHeaderClick,
      handleSizeChange,
      handlePageChange
    }
  }
})
</script>

<style scoped>
.ys-table-container {
  width: 100%;
}

.ys-table-pagination {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
}
</style>