import { createApp } from 'vue';
import router from './router.config';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';
import App from './App.vue';
import quickEncrypt from './lib/encrypt';
import axios from 'axios';
import VueAxios from 'vue-axios';
import MyIpQuery from './lib/getIp';


const app = createApp(App);

app.config.globalProperties.quickEncrypt  = quickEncrypt;
app.config.globalProperties.MyIp  = MyIpQuery;

app.use(router).use(VueAxios, axios).mount('#app');

