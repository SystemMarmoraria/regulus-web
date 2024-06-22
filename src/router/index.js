import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: { requiresAuth: false }
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminView,
        meta: { requiresAuth: true }
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


function isLogged(status) {
    const token = this.$store.getters.token;
    return !!token && status === 201;
}

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isLogged(this.$store.getters.isAuthenticated)) {
        next('/login');
    } else {
        next();
    }
});

export default router