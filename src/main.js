import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './index.scss';
import Alert from '@/components/alert/alert'

Vue.config.productionTip = false;
Vue.prototype.$Alert = Alert
new Vue({
  router,
  render: (h) => h(App),
  el: '#app',
});
