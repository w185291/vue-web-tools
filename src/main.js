import { createApp } from 'vue';
import router from './router.config';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';
import App from './App.vue';


const app = createApp(App);

app.use(router).mount('#app');