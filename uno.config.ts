/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-09 22:40:18
 */
// uno.config.ts
// import transformerVariantGroup from '@unocss/transformer-variant-group'// 分组
// import transformerDirectives from '@unocss/transformer-directives'// 变体指令
import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss';
export default defineConfig({
  // ...UnoCSS options
  // presets: [
  //   // presetIcons({
  //   //   /* options */
  //   //   // extraProperties: {
  //   //   // display: 'inline-block',
  //   //   // 'vertical-align': 'middle'
  //   //   // ...
  //   //   // }
  //   // })
  // ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
});
