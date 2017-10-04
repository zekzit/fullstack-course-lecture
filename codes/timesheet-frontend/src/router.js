import VueRouter from 'vue-router'
import Hello from './components/Hello'
// import User from './components/User'
// import UserInfo from './components/UserInfo'
// import UserEdit from './components/UserEdit'
import Timestamp from './components/Timestamp'
import Playground from './components/Playground'

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/playground',
    name: 'Playground',
    component: Playground
  },
  {
    path: '/timestamps',
    name: 'Timestamps',
    component: Timestamp
  }
  // {
  //   path: '/users/:id',
  //   name: 'User',
  //   component: User,
  //   children: [{
  //     path: 'info',
  //     name: 'UserInfo',
  //     component: UserInfo
  //   },
  //   {
  //     path: 'edit',
  //     name: 'UserEdit',
  //     component: UserEdit
  //   }
  //   ]
  // }
  ]
})

export default router
