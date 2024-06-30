<!--
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-14 23:56:11
-->
<template>
  <div id="TopNavigationComponent" class="flex select-none">
    <!-- logo -->
    <div class="h-full bg-yellow aspect-square p-2">
      <div id="logo" class="h-full bg-green" @click="f_routeTo">
        <canvas width="50%" height="50%" data-path="/home"></canvas>
      </div>
    </div>
    <div class="bg-red h-full w-full flex justify-end">
      <div class="">
        <nav class="h-full bg-green flex justify-around items-center" @click="f_routeTo">
          <a href="#" class="bg-yellow" data-path="/game">游戏</a>
          <a href="#" class="bg-yellow" data-path="/tool">工具</a>
        </nav>
      </div>
      <div class="w-[4px] h-full py-4 mx-2 scale-x-25">
        <div class="w-full h-full bg-black"></div>
      </div>
      <!-- 主题切换 -->
      <div
        class="lightDarkSwitch w-10 bg-green flex justify-center items-center"
        @click="f_switchLD"
      >
        <div>light</div>
      </div>
      <div class="w-[4px] h-full py-4 mx-2 scale-x-25">
        <div class="w-full h-full bg-black"></div>
      </div>
      <!-- 图标 -->
      <div class="h-full bg-green flex items-center">
        <div class="w-6 aspect-square bg-yellow"></div>
        <div class="w-6 aspect-square bg-yellow m-2"></div>
        <div class="w-6 aspect-square bg-yellow"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'topNav'
});
const router = useRouter();
// 路由跳转
/**
 * @description 路由跳转
 * @param e {Event}
 */
function f_routeTo(e: Event) {
  if (!e.target) return;
  e.preventDefault();
  // 路由跳转
  console.info('跳转', (e.target as HTMLAnchorElement).dataset.path);
  router.push({ path: (e.target as HTMLAnchorElement).dataset.path });
}
function f_switchLD() {
  const html = document.querySelector('html');
  html!.classList.toggle('light');
  html!.classList.toggle('dark');
}
</script>

<style scoped lang="scss">
#TopNavigationComponent {
  max-width: 1640px;
  height: 64px;
  margin: 0 auto;
  #logo {
    cursor: pointer;
  }
  nav {
    a {
      display: inline-block;
      padding: 0 8px;
    }
  }
}
</style>
