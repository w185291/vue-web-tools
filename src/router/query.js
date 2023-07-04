const Query = [
    {
        path: '/query/ip',
        name: 'query-ip',
        meta: { title: 'IP 查詢' },
        component: () => import('@/views/query/Ip.vue'), 
    },
];
  
export default Query