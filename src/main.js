// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import axios from 'axios'
Vue.prototype.$http = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods:{
    postData () {
      this.$http({
        method: 'post',
        url: 'https://api.douban.com/v2/book/1220562',
        data: {
          name: 'xiaoming',
          info: '12'
        }
      })
    }
  }

})
