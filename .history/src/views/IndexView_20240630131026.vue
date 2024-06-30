<!--
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-14 23:48:33
 *
 * @description 主页面视图
-->
<template>
  <div id="IndexView" ref="index">
    <header
      class="w-full fixed top-0 left-0 transition-all duration-200"
      :class="{ '-top-16': isScrollDown === 1 }"
    >
      <!-- 顶部导航栏 -->
      <TopNavigationComponent />
    </header>
    <main class="min-h-screen pt-16 bg-pink flex">
      <RouterView class="bg-orange" />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopNavigationComponent from '@/components/TopNavigationComponent.vue';
const { proxy } = getCurrentInstance();
// 需要中转一下才能在class里响
const isScrollDown = ref(proxy.g_bodyScroll);
</script>

<style scoped></style>
