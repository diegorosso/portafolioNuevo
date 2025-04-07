import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { globalState } from './globalState.js';

// Inicializa AOS
AOS.init();

// Crea la aplicación y móntala
const app = createApp(App);

// Agrega AOS como un plugin global si deseas usarlo en cualquier lugar
app.config.globalProperties.$aos = AOS;

app.config.globalProperties.$globalState = globalState;

app.mount('#app');
