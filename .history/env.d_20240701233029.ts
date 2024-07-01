/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-09 22:28:56
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import { App, defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    g_name: string;
    g_bodyScroll: number; // 1 向下滚动 0 向上滚动
  }
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PLATFORM: string;
  // 更多环境变量...
}
