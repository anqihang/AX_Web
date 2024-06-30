// vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///D:/AX/AX/node_modules/vitest/dist/config.js";

// vite.config.ts
import { fileURLToPath, URL as URL2 } from "node:url";
import vue from "file:///D:/AX/AX/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/AX/AX/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { defineConfig } from "file:///D:/AX/AX/node_modules/vite/dist/node/index.js";
import VueDevTools from "file:///D:/AX/AX/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import UnoCSS from "file:///D:/AX/AX/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/AX/AX/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_import_meta_url = "file:///D:/AX/AX/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      // global imports to register
      imports: [
        // presets
        "vue",
        "vue-router",
        "pinia",
        // custom
        {
          // '@vueuse/core': [
          //   // named imports
          //   'useMouse', // import { useMouse } from '@vueuse/core',
          //   // alias
          //   ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
          // ],
          axios: [
            // default imports
            ["default", "axios"]
            // import { default as axios } from 'axios',
          ]
        },
        // example type import
        {
          from: "vue-router",
          imports: ["RouteLocationRaw"],
          type: true
        }
      ],
      // Array of strings of regexes that contains imports meant to be filtered out.
      ignore: ["useMouse", "useFetch"],
      // Enable auto import by filename for default module exports under directories
      defaultExportByFilename: false,
      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: "src/auto-imports.d.ts",
      // Array of strings of regexes that contains imports meant to be ignored during
      // the declaration file generation. You may find this useful when you need to provide
      // a custom signature for a function.
      ignoreDts: ["ignoredFunction", /^ignore_/],
      // Auto import inside Vue template
      // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
      vueTemplate: false,
      // Custom resolvers, compatible with `unplugin-vue-components`
      // see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [
        /* ... */
      ],
      // Inject the imports at the end of other imports
      injectAtEnd: true,
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false,
        // Default `false`
        filepath: "./.eslintrc-auto-import.json",
        // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true
        // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    })
  ],
  resolve: {
    alias: {
      // '/': fileURLToPath(new URL('./public', import.meta.url)),
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    hmr: true,
    open: true
  }
});

// vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///D:/AX/AX/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXEFYXFxcXEFYXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxBWFxcXFxBWFxcXFx2aXRlc3QuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9BWC9BWC92aXRlc3QuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHsgbWVyZ2VDb25maWcsIGRlZmluZUNvbmZpZywgY29uZmlnRGVmYXVsdHMgfSBmcm9tICd2aXRlc3QvY29uZmlnJ1xuaW1wb3J0IHZpdGVDb25maWcgZnJvbSAnLi92aXRlLmNvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VDb25maWcoXG4gIHZpdGVDb25maWcsXG4gIGRlZmluZUNvbmZpZyh7XG4gICAgdGVzdDoge1xuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ2UyZS8qJ10sXG4gICAgICByb290OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0pXG4pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXEFYXFxcXEFYXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxBWFxcXFxBWFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQVgvQVgvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcblxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlSnN4KCksXG4gICAgVnVlRGV2VG9vbHMoKSxcbiAgICBVbm9DU1MoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIC8vIHRhcmdldHMgdG8gdHJhbnNmb3JtXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XG4gICAgICAgIC9cXC52dWUkLyxcbiAgICAgICAgL1xcLnZ1ZVxcP3Z1ZS8sIC8vIC52dWVcbiAgICAgICAgL1xcLm1kJC8gLy8gLm1kXG4gICAgICBdLFxuICAgICAgLy8gZ2xvYmFsIGltcG9ydHMgdG8gcmVnaXN0ZXJcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgLy8gcHJlc2V0c1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAncGluaWEnLFxuICAgICAgICAvLyBjdXN0b21cbiAgICAgICAge1xuICAgICAgICAgIC8vICdAdnVldXNlL2NvcmUnOiBbXG4gICAgICAgICAgLy8gICAvLyBuYW1lZCBpbXBvcnRzXG4gICAgICAgICAgLy8gICAndXNlTW91c2UnLCAvLyBpbXBvcnQgeyB1c2VNb3VzZSB9IGZyb20gJ0B2dWV1c2UvY29yZScsXG4gICAgICAgICAgLy8gICAvLyBhbGlhc1xuICAgICAgICAgIC8vICAgWyd1c2VGZXRjaCcsICd1c2VNeUZldGNoJ10gLy8gaW1wb3J0IHsgdXNlRmV0Y2ggYXMgdXNlTXlGZXRjaCB9IGZyb20gJ0B2dWV1c2UvY29yZScsXG4gICAgICAgICAgLy8gXSxcbiAgICAgICAgICBheGlvczogW1xuICAgICAgICAgICAgLy8gZGVmYXVsdCBpbXBvcnRzXG4gICAgICAgICAgICBbJ2RlZmF1bHQnLCAnYXhpb3MnXSAvLyBpbXBvcnQgeyBkZWZhdWx0IGFzIGF4aW9zIH0gZnJvbSAnYXhpb3MnLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gZXhhbXBsZSB0eXBlIGltcG9ydFxuICAgICAgICB7XG4gICAgICAgICAgZnJvbTogJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAgIGltcG9ydHM6IFsnUm91dGVMb2NhdGlvblJhdyddLFxuICAgICAgICAgIHR5cGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSxcblxuICAgICAgLy8gQXJyYXkgb2Ygc3RyaW5ncyBvZiByZWdleGVzIHRoYXQgY29udGFpbnMgaW1wb3J0cyBtZWFudCB0byBiZSBmaWx0ZXJlZCBvdXQuXG4gICAgICBpZ25vcmU6IFsndXNlTW91c2UnLCAndXNlRmV0Y2gnXSxcblxuICAgICAgLy8gRW5hYmxlIGF1dG8gaW1wb3J0IGJ5IGZpbGVuYW1lIGZvciBkZWZhdWx0IG1vZHVsZSBleHBvcnRzIHVuZGVyIGRpcmVjdG9yaWVzXG4gICAgICBkZWZhdWx0RXhwb3J0QnlGaWxlbmFtZTogZmFsc2UsXG5cbiAgICAgIC8vIEF1dG8gaW1wb3J0IGZvciBtb2R1bGUgZXhwb3J0cyB1bmRlciBkaXJlY3Rvcmllc1xuICAgICAgLy8gYnkgZGVmYXVsdCBpdCBvbmx5IHNjYW4gb25lIGxldmVsIG9mIG1vZHVsZXMgdW5kZXIgdGhlIGRpcmVjdG9yeVxuICAgICAgZGlyczogW1xuICAgICAgICAvLyAnLi9ob29rcycsXG4gICAgICAgIC8vICcuL2NvbXBvc2FibGVzJyAvLyBvbmx5IHJvb3QgbW9kdWxlc1xuICAgICAgICAvLyAnLi9jb21wb3NhYmxlcy8qKicsIC8vIGFsbCBuZXN0ZWQgbW9kdWxlc1xuICAgICAgICAvLyAuLi5cbiAgICAgIF0sXG5cbiAgICAgIC8vIEZpbGVwYXRoIHRvIGdlbmVyYXRlIGNvcnJlc3BvbmRpbmcgLmQudHMgZmlsZS5cbiAgICAgIC8vIERlZmF1bHRzIHRvICcuL2F1dG8taW1wb3J0cy5kLnRzJyB3aGVuIGB0eXBlc2NyaXB0YCBpcyBpbnN0YWxsZWQgbG9jYWxseS5cbiAgICAgIC8vIFNldCBgZmFsc2VgIHRvIGRpc2FibGUuXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuXG4gICAgICAvLyBBcnJheSBvZiBzdHJpbmdzIG9mIHJlZ2V4ZXMgdGhhdCBjb250YWlucyBpbXBvcnRzIG1lYW50IHRvIGJlIGlnbm9yZWQgZHVyaW5nXG4gICAgICAvLyB0aGUgZGVjbGFyYXRpb24gZmlsZSBnZW5lcmF0aW9uLiBZb3UgbWF5IGZpbmQgdGhpcyB1c2VmdWwgd2hlbiB5b3UgbmVlZCB0byBwcm92aWRlXG4gICAgICAvLyBhIGN1c3RvbSBzaWduYXR1cmUgZm9yIGEgZnVuY3Rpb24uXG4gICAgICBpZ25vcmVEdHM6IFsnaWdub3JlZEZ1bmN0aW9uJywgL15pZ25vcmVfL10sXG5cbiAgICAgIC8vIEF1dG8gaW1wb3J0IGluc2lkZSBWdWUgdGVtcGxhdGVcbiAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdW5qcy91bmltcG9ydC9wdWxsLzE1IGFuZCBodHRwczovL2dpdGh1Yi5jb20vdW5qcy91bmltcG9ydC9wdWxsLzcyXG4gICAgICB2dWVUZW1wbGF0ZTogZmFsc2UsXG5cbiAgICAgIC8vIEN1c3RvbSByZXNvbHZlcnMsIGNvbXBhdGlibGUgd2l0aCBgdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNgXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0L3B1bGwvMjMvXG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgLyogLi4uICovXG4gICAgICBdLFxuXG4gICAgICAvLyBJbmplY3QgdGhlIGltcG9ydHMgYXQgdGhlIGVuZCBvZiBvdGhlciBpbXBvcnRzXG4gICAgICBpbmplY3RBdEVuZDogdHJ1ZSxcblxuICAgICAgLy8gR2VuZXJhdGUgY29ycmVzcG9uZGluZyAuZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbiBmaWxlLlxuICAgICAgLy8gZXNsaW50IGdsb2JhbHMgRG9jcyAtIGh0dHBzOi8vZXNsaW50Lm9yZy9kb2NzL3VzZXItZ3VpZGUvY29uZmlndXJpbmcvbGFuZ3VhZ2Utb3B0aW9ucyNzcGVjaWZ5aW5nLWdsb2JhbHNcbiAgICAgIGVzbGludHJjOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBEZWZhdWx0IGBmYWxzZWBcbiAgICAgICAgZmlsZXBhdGg6ICcuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJywgLy8gRGVmYXVsdCBgLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbmBcbiAgICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSAvLyBEZWZhdWx0IGB0cnVlYCwgKHRydWUgfCBmYWxzZSB8ICdyZWFkb25seScgfCAncmVhZGFibGUnIHwgJ3dyaXRhYmxlJyB8ICd3cml0ZWFibGUnKVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgLy8gJy8nOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vcHVibGljJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG1yOiB0cnVlLFxuICAgIG9wZW46IHRydWVcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb04sU0FBUyxpQkFBQUEsc0JBQXFCO0FBQ2xQLFNBQVMsYUFBYSxnQkFBQUMsZUFBYyxzQkFBc0I7OztBQ0RzSixTQUFTLGVBQWUsT0FBQUMsWUFBVztBQUVuUCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBRXhCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQVJzRyxJQUFNLDJDQUEyQztBQVc5SyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUE7QUFBQSxNQUVULFNBQVM7QUFBQSxRQUNQO0FBQUE7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsUUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQSxTQUFTO0FBQUE7QUFBQSxRQUVQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQTtBQUFBLFFBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU9FLE9BQU87QUFBQTtBQUFBLFlBRUwsQ0FBQyxXQUFXLE9BQU87QUFBQTtBQUFBLFVBQ3JCO0FBQUEsUUFDRjtBQUFBO0FBQUEsUUFFQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sU0FBUyxDQUFDLGtCQUFrQjtBQUFBLFVBQzVCLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFHQSxRQUFRLENBQUMsWUFBWSxVQUFVO0FBQUE7QUFBQSxNQUcvQix5QkFBeUI7QUFBQTtBQUFBO0FBQUEsTUFJekIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLTjtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0EsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0wsV0FBVyxDQUFDLG1CQUFtQixVQUFVO0FBQUE7QUFBQTtBQUFBLE1BSXpDLGFBQWE7QUFBQTtBQUFBO0FBQUEsTUFJYixXQUFXO0FBQUE7QUFBQSxNQUVYO0FBQUE7QUFBQSxNQUdBLGFBQWE7QUFBQTtBQUFBO0FBQUEsTUFJYixVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUE7QUFBQSxRQUNULFVBQVU7QUFBQTtBQUFBLFFBQ1Ysa0JBQWtCO0FBQUE7QUFBQSxNQUNwQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQTtBQUFBLE1BRUwsS0FBSyxjQUFjLElBQUlDLEtBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7OztBRDdHOEgsSUFBTUMsNENBQTJDO0FBSWhMLElBQU8sd0JBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQUMsY0FBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLE1BQ0osYUFBYTtBQUFBLE1BQ2IsU0FBUyxDQUFDLEdBQUcsZUFBZSxTQUFTLE9BQU87QUFBQSxNQUM1QyxNQUFNQyxlQUFjLElBQUksSUFBSSxNQUFNRix5Q0FBZSxDQUFDO0FBQUEsSUFDcEQ7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFsiZmlsZVVSTFRvUGF0aCIsICJkZWZpbmVDb25maWciLCAiVVJMIiwgIlVSTCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgImRlZmluZUNvbmZpZyIsICJmaWxlVVJMVG9QYXRoIl0KfQo=
