/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-06-30 23:24:42
 */
import { apiNavMenuGet } from '@/api/navMenu/api_navMenu';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavMenuStore = defineStore('navMenu', () => {
  const topNavMenuList = ref([]);
  function f_getNavMenu(id?: number) {
    apiNavMenuGet(id).then((data) => {
      console.log(data);
      topNavMenuList.value = data;
    });
  }

  const navMenu = computed(async () => {
    if (topNavMenuList.value.length === 0) await f_getNavMenu();
    console.log(topNavMenuList);

    return topNavMenuList.value;
  });

  return {
    topNavMenuList,
    navMenu,
    f_getNavMenu
  };
});
