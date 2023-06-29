import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/router/home'
import Auth from '@/router/auth'


const mergeRoutes = [];

mergeRoutes.push(...Home,...Auth);

console.log(mergeRoutes);

const router = createRouter({
// 这里使用hash模式路由
  history: createWebHistory(),  
  routes: mergeRoutes,
})

export default router