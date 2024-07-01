/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-06-30 23:24:42
 */
import { apiNavMenuGet } from '@/api/navMenu/api_navMenu';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavMenuStore = defineStore('navMenu', () => {
  const topNavMenuList = ref([]);
  async function f_getNavMenu(id?: number) {
    await apiNavMenuGet(id).then((data) => {
      topNavMenuList.value = data;
    });
  }

  const navMenuComp = computed(() => {
    if (topNavMenuList.value.length === 0) {
      f_getNavMenu();
    }
    return topNavMenuList.value;
  });

  return {
    topNavMenuList,
    navMenuComp,
    f_getNavMenu
  };
});
