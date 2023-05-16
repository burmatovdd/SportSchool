import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./components/login/router.js";

createApp(App)
    .use(router)
    .mount('#app')
