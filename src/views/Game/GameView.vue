<!--
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-27 15:36:18
-->
<template>
  <div id="GameView" class="pt-4 w-full grid grid-cols-8 gap-4">
    <div
      class="gameItem cursor-pointer rounded-md overflow-hidden"
      v-for="item in gameList"
      :key="item.name"
      @click="f_routeTo(item.pathName)"
    >
      <img class="w-full" :src="item.img" :alt="item.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { t_GameItem } from '@/types';
const router = useRouter();

const gameList = ref<t_GameItem[]>([
  {
    name: '恶意不息',
    img: '/images/game/noRestForTheWicked_600x900.jpg',
    pathName: 'noRestForTheWicked'
  },
  {
    name: '奥日',
    img: '/images/game/oriAndTheWillOfTheWisps_600x900.jpg',
    pathName: 'ori'
  },
  {
    name: '奥日',
    img: '/images/game/oriAndTheWillOfTheWisps_600x900.jpg',
    pathName: 'ori'
  },
  {
    name: '奥日',
    img: '/images/game/oriAndTheWillOfTheWisps_600x900.jpg',
    pathName: 'ori'
  },
  {
    name: '奥日',
    img: '/images/game/oriAndTheWillOfTheWisps_600x900.jpg',
    pathName: 'ori'
  },
  {
    name: '奥日',
    img: '/images/game/oriAndTheWillOfTheWisps_600x900.jpg',
    pathName: 'ori'
  },
  {
    name: '奥日',
    img: '/images/game/oriAndTheWillOfTheWisps_600x900.jpg',
    pathName: 'ori'
  },
  {
    name: '奥日',
    img: '/images/game/oriAndTheWillOfTheWisps_600x900.jpg',
    pathName: 'ori'
  }
]);
function f_routeTo(name: string) {
  console.log('跳转', name);
  router.push({ name });
}
</script>

<style scoped lang="scss">
#GameView {
  display: grid;
  .gameItem {
    img {
      display: block;
    }
  }
}
</style>
