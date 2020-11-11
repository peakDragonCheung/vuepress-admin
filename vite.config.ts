import * as path from "path";
// import * as reactPlugin from 'vite-plugin-react';

import type { UserConfig } from "vite";

const config: UserConfig = {
  // 选项...
  cssPreprocessOptions: {
    scss: {
      modifyVars: {
        "$pre-fix": ".vuepress-admin",
      },
    },
  },
  alias: {
    "/src/": path.resolve(__dirname, "./src"),
  },
  define: {
    API_URL: 'www.baidu.com'
  },
  optimizeDeps: {
    include: ['@kangc/v-md-editor/lib/theme/vuepress.js']
  }
};
export default config;
