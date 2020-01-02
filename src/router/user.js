
const UserList = () => import(/* webpackChunkName:'group-user' */ '@/views/user/list');

const router = [
  {
    path: 'userList',
    name: 'UserList',
    component: UserList
  },
]


export default router;
