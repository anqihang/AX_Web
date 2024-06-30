<template>
  <Sub v-model="input" placeholder="test" :search="search"></Sub>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Sub from './sub.vue'
const input = ref(1)
/**
 * callback为any是不对的，需补齐类型
 * @param query
 * @param callback
 */
function search(query: string, callback: (arr: { value: number; label: string }[]) => void) {
  // 模拟
  setTimeout(() => {
    callback([
      {
        value: 1,
        label: 'a'
      },
      {
        value: 2,
        label: 'b'
      }
    ])
  }, 5000)
}
</script>
