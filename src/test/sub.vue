<template>
  <el-select
    v-model="value"
    :placeholder="placeholder"
    filterable
    remote
    :remote-method="remoteMethod"
    :loading="loading"
  >
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>
<script setup lang="ts">
import { ref } from 'vue'
/**
 * 实现Props，类型和默认值越完整越好
 * //1.实现标准v-model
 * //2.placeholder字符串，单向传输
 * //3.search方法，可调用父组件提供的网络加载方法，最后把结果赋值给options
 */
const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  search: {
    type: Function as PropType<
      (_query: string, callback: (_options: { value: number; label: string }[]) => void) => void
    >,
    default: () => {}
  },
  moduleValue: {
    type: Number,
    default: 0
  }
})
const emits = defineEmits(['update:modelValue'])

const input = defineModel()

// value跟外部传入的输入保持同步，本组件内更改也会影响到父组件的值
const value = ref<number>(props.moduleValue)
watch(value, (newValue) => {
  emits('update:modelValue', newValue)
})

const options = ref<
  {
    value: number
    label: string
  }[]
>([])
// loading控制
const loading = ref(false)
// remoteMethod会调用父组件提供的search方法，最后把结果赋值给options
function remoteMethod(query: string) {
  loading.value = true
  props.search(query, f_callback)
}
function f_callback(_options: { value: number; label: string }[]) {
  options.value = _options
  loading.value = false
}
</script>
