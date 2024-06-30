<!--
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-16 23:54:29
 *
 * @description 导航工具视图
-->
<template>
  <div id="NavToolView" class="bg-pink w-full pt-4 flex justify-center">
    <section class="grid grid-cols-4 gap-4">
      <div class="item">
        <img src="/images/svg/QuickReference.svg" alt="工具集" />
        <div class="title">Quick Reference</div>
      </div>
      <div class="item">radash</div>
      <div class="item">vueuse</div>
      <div class="item">
        <img src="/images/svg/tldraw.svg" alt="画板" />
        <div class="title">tldraw</div>
      </div>
      <div class="item">
        <img src="/public/images/wordmark.jpg" alt="画板" />
        <div class="title">volta</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#NavToolView {
  .item {
    background-color: green;
    width: 12rem;
    height: 4rem;
    border-radius: 4px;
    justify-self: center;
    display: flex;
    // justify-content: center;
    align-items: center;
    padding: 12px;
    img {
      height: 100%;
      margin-right: 6px;
      background-color: yellow;
      border-radius: 4px;
    }
    .title {
      flex: 1;
      background-color: red;
    }
  }
}
</style>
