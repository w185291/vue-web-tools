const Convert = [
    {
        path: '/tools/url',
        name: 'convert-url',
        component: () => import('@/views/function/UrlEncodeDecode.vue'), 
    },
    {
        path: '/tools/json',
        name: 'convert-json',
        component: () => import('@/views/function/JSON.vue'), 
    },
    {
        path: '/tools/one-way-encryption',
        name: 'one-way-encryption',
        component: () => import('@/views/function/OneWayEryption.vue'), 
    },
    {
        path: '/tools/reversible-encryption',
        name: 'reversible-encryption',
        component: () => import('@/views/function/ReversibleEryption.vue'), 
    },
];
  
export default Convert