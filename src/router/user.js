const User = [
    {
        path: '/users/:userId',
        name: 'user',
        component: () => import('@/views/users/User.vue'), 
    }
];
  
export default User