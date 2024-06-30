<!--
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-09 22:28:56
-->
<script setup lang="ts">
const { proxy, appContext } = getCurrentInstance();
/**
 * 监听滚动
 */
const body = document.querySelector('body');

let topOffset = 0;
nextTick(() => {
  // 只能这样绑定才能监听到滚动事件
  body!.onscroll = () => {
    if (body!.getBoundingClientRect().top < topOffset) {
      appContext.config.globalProperties.g_bodyScroll.value = 1;
    } else {
      appContext.config.globalProperties.g_bodyScroll.value = 0;
    }
    topOffset = body!.getBoundingClientRect().top;
  };
});
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss"></style>
