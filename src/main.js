import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/routerIndex.js';
import Toast from 'vue-toastification';

import './styles/bootstrap.scss';
import '@sweet/dist/sweetalert2.min.css';
import '@vueloader/dist/css/index.css';
import '@vuetoasty/dist/index.css';
import App from './App.vue';

createApp(App)
    .use(router)
    .use(Toast)
    .use(createPinia())
    .mount('#app')

import '@bootstrap/dist/js/bootstrap'