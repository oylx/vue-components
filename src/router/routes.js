export const routes = [
  {
    path: '/',
    redirect: '/index',
    component: () => import('@/views/Home'),
    name: '首页'
  },
  {
    path: '/communicate',
    component: () => import('@/views/Communicate'),
    name: '',
  },
  {
    path: '/propeventslot',
    component: () => import('@/views/PropEventSlot'),
    name: 'PropEventSlot',
  },
  {
    path: '/findcomponent',
    component: () => import('@/views/find-component'),
    name: '寻找组件',
  },
  {
    path: '/checkbox',
    component: () => import('@/views/checkbox'),
    name: '多选框',
  },
  {
    path: '/display',
    component: () => import('@/views/display') ,
    name: 'display',
  },
  {
    path: '/alert',
    component: () => import('@/views/alert'),
    name: 'alert',
  },
]
