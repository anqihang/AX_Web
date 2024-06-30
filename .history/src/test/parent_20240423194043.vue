父组件

<template>
	<sub v-model="input" placeholder="test" :search="search"></sub>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Sub from "./sub";
const input = ref(1);
/**
 * callback为any是不对的，需补齐类型
 * @param query
 * @param callback
 */
function search(query: string, callback: any) {
	// 模拟
	setTimeout(() => {
		callback([
			{
				value: 1,
				label: "a"
			},
			{
				value: 2,
				label: "b"
			}
		]);
	}, 5000);
}
</script>
```

