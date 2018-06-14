
import Home from './views/Home.vue'
import About from './views/About.vue'
import HelloWorld from './components/HelloWorld.vue'
import Page from './components/Page.vue'




let routes = [
    {
        path: '/Home',
        component: Home,
        name: 'Home',
        hidden: true
    },
    {
        path: '/Page',
        component: Page,
        name: 'Page',
        hidden: true
    },
];
export default routes;
