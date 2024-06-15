import { getToken } from '../utils/auth'

export const constantRoute = [
    {
        path:'/',
        redirect: '/login'
    },
    {
        path:'/login',
        component: ()=>import('../views/login/index.vue'),
        name: 'login',
    },
    {
        path:'/home',
        component: ()=>import('../views/home/index.vue'),
        name: 'home',
        children: [
            {
                path:'/ProductManagement',
                component: ()=>import('../views/home/contents/ProductManagement.vue'),
                name: 'ProductManagement',
            },
            {
                path:'/UserManagement',
                component: ()=>import('../views/home/contents/UserManagement.vue'),
                name: 'UserManagement',
                beforeEnter: () => {
                    const token = getToken();
                    if (token !== 'admin') {
                        return false;
                    };                    
                },
            },
            {
                path:'/TodoManagement',
                component: ()=>import('../views/home/contents/TodoManagement.vue'),
                name: 'TodoManagement',
            },
        ]
    },
    {
        path:'/404',
        component: ()=>import('../views/404/index.vue'),
        name: '404',
    },
    {
        path:'/:pathMatch(.*)*',
        redirect:'/404',
        name: 'any',
    }
]