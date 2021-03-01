import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import Loading from 'vue-loading-overlay';
import VueSimpleSuggest from 'vue-simple-suggest';

import VueClipboard from 'vue-clipboard2'

import router from './router';
import App from './App.vue';


import 'vue-loading-overlay/dist/vue-loading.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-simple-suggest/dist/styles.css';


import '@gouvfr/all/dist/js/all.js';
import '@gouvfr/all/dist/css/all.css';
import './static/css/custom.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueClipboard);
Vue.use(Loading);
Vue.use(Vuex);

Vue.component('vue-simple-suggest', VueSimpleSuggest);

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
  },
  beforeCreate() {},
}).$mount('#app');
