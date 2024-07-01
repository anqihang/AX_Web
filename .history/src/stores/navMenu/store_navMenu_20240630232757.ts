/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-06-30 23:24:42
 */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavMenuStore = defineStore('navMenu', () => {
  const topNavMenu = ref([]);
  function queryNavMenu() {}
  return {
    topNavMenu
  };
});
