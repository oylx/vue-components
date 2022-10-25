import Home from '@/views/Home'
import Communicate from '@/views/Communicate'
import PropEventSlot from '@/views/PropEventSlot'
import findComponent from '@/views/find-component'
import checkbox from '@/views/checkbox'
import display from '@/views/display'

export const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Home,
    name: '首页'
  },
  {
    path: '/communicate',
    component: Communicate,
    name: '',
  },
  {
    path: '/propeventslot',
    component: PropEventSlot,
    name: 'PropEventSlot',
  },
  {
    path: '/findcomponent',
    component: findComponent,
    name: '寻找组件',
  },
  {
    path: '/checkbox',
    component: checkbox,
    name: '多选框',
  },
  {
    path: '/display',
    component: display,
    name: 'display',
  }
]
