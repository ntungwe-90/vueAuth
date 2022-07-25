import HomePage from '@/pages/home.vue';
import AboutPage from '@/pages/about.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage
    },
    {
        name: 'about',
        path: '/about',
        component: AboutPage
    },
   
]

export default routes;