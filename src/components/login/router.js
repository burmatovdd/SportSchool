import {createRouter, createWebHistory} from 'vue-router';
import login from "./login.vue";
import Main from "../MainForAdmin/Main.vue";
import MainForEmployee from "../MainForEmployee/MainForEmployee.vue";

export default  createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: login },
        { path: '/mainForAdmin', component: Main},
        { path: '/mainForEmployee', component: MainForEmployee},
    ],
})