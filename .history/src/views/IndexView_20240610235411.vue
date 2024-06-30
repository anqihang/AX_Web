<!--
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-14 23:48:33
-->
<template>
  <header class="w-full fixed top-0 left-0">
    <TopNavigationComponent />
  </header>
  <main class="min-h-screen">
    <RouterView class="" />
  </main>
</template>

<script setup lang="ts">
import TopNavigationComponent from '@/components/TopNavigationComponent.vue'
</script>

<style scoped></style>
