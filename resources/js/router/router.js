import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ShopPage from "../pages/ShopPage.vue";

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/shop/:category', name: 'Shop', component: ShopPage, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
