import HelloWorld from './components/HelloWorld.vue';
import tabs from "@/components/tabs";

export const routes = [
    {
        name: 'home',
        path: '/home',
        component: HelloWorld
    },
    {
        name: 'score',
        path: '/',
        component: tabs
    },
];
