const Convert = [
    {
        path: '/tools/url',
        name: 'convert-url',
        meta: { title: 'Url Encode/Decode' },
        component: () => import('@/views/function/UrlEncodeDecode.vue'), 
    },
    {
        path: '/tools/json',
        name: 'convert-json',
        meta: { title: 'JSON 轉換' },
        component: () => import('@/views/function/JSON.vue'), 
    },
    {
        path: '/tools/one-way-encryption',
        name: 'one-way-encryption',
        meta: { title: '不可逆加密' },
        component: () => import('@/views/function/OneWayEryption.vue'), 
    },
    {
        path: '/tools/reversible-encryption',
        name: 'reversible-encryption',
        meta: { title: '可逆加密' },
        component: () => import('@/views/function/ReversibleEryption.vue'), 
    },
];
  
export default Convert