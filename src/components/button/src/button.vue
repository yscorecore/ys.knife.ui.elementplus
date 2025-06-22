<template>
  <el-button
    :type="type"
    :size="size"
    :plain="plain"
    :round="round"
    :circle="circle"
    :disabled="disabled"
    :loading="loading"
    :icon="icon"
    :autofocus="autofocus"
    :native-type="nativeType"
    :class="customClass"
    @click="handleClick"
  >
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'YsButton',
  components: {
    ElButton
  },
  props: {
    // 继承Element Plus的Button属性
    type: {
      type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | ''>,
      default: ''
    },
    size: {
      type: String as PropType<'large' | 'default' | 'small'>,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button'
    },
    // 自定义属性
    customClass: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    // 处理点击事件
    const handleClick = (e: MouseEvent) => {
      emit('click', e)
    }

    return {
      handleClick
    }
  }
})
</script>

<style scoped>
/* 自定义样式可以在这里添加 */
</style>