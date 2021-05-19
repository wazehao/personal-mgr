import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';
// import Auth from '../views/Auth/index.vue';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    // component: Auth,
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
