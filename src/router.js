
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/404.vue'
import NotFound2 from './views/404.vue'




let routes = [
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'videogame_asset',//图标样式class
        children: [
            { path: '/main', component: About, name: '主页', hidden: false },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'videogame_asset',//图标样式class
        children: [
            { path: '/4042', component: NotFound2, name: 'Table', hidden: false },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];
export default routes;
