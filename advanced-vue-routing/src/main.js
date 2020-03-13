import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Swamp from './components/Swamp';
import Gator from './components/Gator';
import Login from './components/Login';

Vue.use(VueRouter);

let isAuthenticated = true;

const router = new VueRouter({
  routes: [
    { path: '/swamp', component: Swamp, alias: '/bayou' },
    {
      path: '/gator',
      component: Gator,
      beforeEnter: (to, from, next) => {
        console.log(`Navigating from ${from.path} to ${to.path} are we?`);
        next();
      }
    },
    { path: '/croc', redirect: to => {
      console.log(to)
      return '/gator';
    }},
    { path: '/login', name: 'login', component: Login }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
