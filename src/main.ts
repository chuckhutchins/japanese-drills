import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// third-party plugins
import dayjs from 'dayjs';

const app = createApp(App);

// dayjs config
app.config.globalProperties.$dayjs = dayjs;

app.use(createPinia());
app.use(router);

app.mount('#app');
