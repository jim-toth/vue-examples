import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Swamp from './components/Swamp';
import Gator from './components/Gator';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/swamp', component: Swamp },
    { path: '/gator', component: Gator }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
