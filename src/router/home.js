const Home = [
    {
        path: '/',
        name: 'home',
        meta: { title: 'Web Tool 整理工具' },
        component: () => import('@/views/home/Index.vue'), 
    }
];
  
export default Home