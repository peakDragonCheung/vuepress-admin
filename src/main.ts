import { createApp } from 'vue'
import App from './App.vue'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
VueMarkdownEditor.use(vuepressTheme);
import './index.scss'
import router from './router'
import './auth';
createApp(App).use(router).use(VueMarkdownEditor).mount('#app');
