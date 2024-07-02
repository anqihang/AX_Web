<!--
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-14 23:56:11
 *
 * @description 顶部导航栏
-->
<template>
  <div id="TopNavigationComponent" class="flex select-none h-16 mx-auto">
    <!-- logo -->
    <div class="h-full bg-yellow aspect-square p-2">
      <div id="logo" class="h-full bg-green cursor-pointer" @click="f_routeTo">
        <canvas width="50%" height="50%" data-path="/home"></canvas>
      </div>
    </div>
    <div class="bg-red h-full w-full flex justify-end">
      <div class="">
        <nav class="h-full bg-green flex justify-around items-center" @click="f_routeTo">
          <!-- <a href="#" class="bg-yellow" data-path="/game">游戏</a> -->
          <!-- <a href="#" class="bg-yellow" data-path="/tool">工具</a> -->
          <a
            href="#"
            class="bg-yellow"
            :data-path="navMenu.path"
            v-for="(navMenu, index) in useNavMenuStore().navMenuComp"
            :key="navMenu.path + index"
          >
            {{ navMenu.title }}
          </a>
        </nav>
      </div>
      <div class="w-[4px] h-full py-6 mx-2 scale-x-50">
        <div class="w-full h-full bg-black"></div>
      </div>
      <!-- 主题切换 -->
      <div
        id="lightDarkSwitch"
        class="w-10 bg-green flex justify-center items-center"
        @click="f_switchLD"
      >
        <div>light</div>
      </div>
      <div class="w-[4px] h-full py-6 mx-2 scale-x-50">
        <div class="w-full h-full text-theme"></div>
      </div>
      <!-- 图标 -->
      <div class="h-full bg-green flex items-center">
        <div class="w-6 h-auto aspect-square bg-yellow i-mdi:github"></div>
        <div class="w-6 h-auto aspect-square bg-yellow ml-2 i-mdi:qqchat"></div>
        <div class="w-6 h-auto aspect-square bg-yellow ml-2"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavMenuStore } from '@/stores/navMenu/store_navMenu';

defineOptions({
  name: 'topNav'
});

// 路由跳转
const router = useRouter();
/**
 * @description 路由跳转
 * @param  {Event} e
 */
function f_routeTo(e: Event) {
  e.preventDefault(); // 阻止默认行为
  console.info('跳转', (e.target as HTMLAnchorElement).dataset.path);
  router.push({ path: (e.target as HTMLAnchorElement).dataset.path });
}
/**
 * @description 切换亮暗主题
 */
function f_switchLD() {
  const html = document.querySelector('html');
  html!.classList.toggle('light');
  html!.classList.toggle('dark');
}
</script>

<style scoped lang="scss">
#TopNavigationComponent {
  max-width: 1640px;
  nav {
    a {
      display: inline-block;
      padding: 0 8px;
    }
  }
}
</style>
