import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Communicate from './views/Communicate';
import PropEventSlot from './views/PropEventSlot';
import findComponent from './views/find-component.vue'
import checkbox from '@/views/checkbox'

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [],
});

const commonRoutes = [
  {
    path: '/',
    redirect: '/index',
    component: Home,
  },
  {
    path: '/communicate',
    component: Communicate,
  },
  {
    path: '/propeventslot',
    component: PropEventSlot,
  },
  {
    path: '/findcomponent',
    component: findComponent
  },
  {
    path: '/checkbox',
    component: checkbox
  }
];

router.addRoutes([...commonRoutes]);

export default router;
