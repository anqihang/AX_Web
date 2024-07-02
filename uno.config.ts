/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-09 22:40:18
 */
// uno.config.ts
// import transformerVariantGroup from '@unocss/transformer-variant-group'// 分组
// import transformerDirectives from '@unocss/transformer-directives'//@apply等指令
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';
export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    //icon-图标
    presetIcons({
      /* options */
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    //attributify-属性化
    presetAttributify({
      /* preset options */
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  // 主题
  theme: {
    color: {
      theme: 'var(--ax-theme-text)'
      // 'bg-theme': 'var(--ax-theme-bg)'
    },
    // 断点-垂直
    breakpoints: {},
    // 水平
    verticalBreakpoints: {}
  }
});
