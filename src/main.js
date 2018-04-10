// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import router from './router'

import VueLocalStorage from 'vue-ls'

import axios from 'axios'

import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)

let options = {
	namespace: 'weather_'
};

/*let options = {
	namespace: 'favoriteArticles_'
};*/
Vue.use(VueLocalStorage, options);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

