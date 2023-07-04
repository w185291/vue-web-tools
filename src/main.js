import { createApp } from 'vue';
import router from './router.config';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';
import App from './App.vue';
import CryptoJS from 'crypto-js';


const app = createApp(App);

app.config.globalProperties.CryptoJS = CryptoJS;

app.use(router).mount('#app');

