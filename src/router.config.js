import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/router/home'
import Convert from '@/router/convert'
import Query from '@/router/query'
// import Auth from '@/router/auth'
// import User from '@/router/user';


const mergeRoutes = [];

mergeRoutes.push(...Home,...Convert,...Query);

console.log(mergeRoutes);

const router = createRouter({
// 这里使用hash模式路由
  history: createWebHistory(),  
  routes: mergeRoutes,
});

export default router