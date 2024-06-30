/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-09 22:28:56
 */
import './assets/main.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
// main.ts
import 'uno.css';
import 'virtual:uno.css';
import 'virtual:unocss-devtools';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

app.config.globalProperties.g_name = 'AX';
app.config.globalProperties.g_bodyScroll = ref(0);
