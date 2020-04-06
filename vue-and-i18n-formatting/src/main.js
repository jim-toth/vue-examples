import Vue from 'vue';
import VueI18n from 'vue-i18n';

import App from './App.vue';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'Hello, {name}!',
      counting: 'One: {0}, Two: {1}, Three: {2}',
      welcome: '<strong>Welcome!</strong>',
      description: 'This sentence is in English!',
    }
  },
  de: {
    message: {
      hello: 'Guten Tag, {name}!',
      counting: 'Eins: {0}, Zwei: {1}, Drei: {2}',
      welcome: '<strong>Wilkommen!</strong>'
    }
  }
};

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app');


