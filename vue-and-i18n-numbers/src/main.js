import Vue from 'vue';
import VueI18n from 'vue-i18n';

import App from './App.vue';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'Hello, {name}!',
      money: 'I found {amount}!',
      today: 'Today is {today} ({longToday})!'
    }
  },
  de: {
    message: {
      hello: 'Guten Tag, {name}!',
      money: 'Ich fand {amount}!',
      today: 'Heute ist {today} ({longToday})!'
    }
  }
};

const numberFormats = {
  en: {
    currency: {
      style: 'currency', currency: 'USD'
    }
  },
  de: {
    currency: {
      style: 'currency', currency: 'EUR', currencyDisplay: 'symbol'
    }
  }
};

const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric'
    }
  },
  de: {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
    }
  }
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
  numberFormats,
  dateTimeFormats
});

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app');
