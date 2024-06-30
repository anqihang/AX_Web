<!--
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-09 22:28:56
-->
<script setup lang="ts">
import type { ComponentInternalInstance } from 'vue';

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
/**
 * 监听滚动
 */
const body = document.querySelector('body');
// const { x, y, isScrolling, arrivedState, directions } = useScroll();
nextTick(() => {});

let topOffset = 0;
nextTick(() => {
  // 只能这样绑定才能监听到滚动事件
  body!.onscroll = (e) => {
    if (body!.getBoundingClientRect().top < topOffset) {
      console.log('下');

      console.log(proxy.g_name);

      // proxy.config.globalProperties[bodyScrollProvider] = 1;
      // console.log(topNavHeader);
      // topNavHeader!.style.top = '-100%';
    } else {
      console.log('上');
    }
    topOffset = body!.getBoundingClientRect().top;
  };
});
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss"></style>
