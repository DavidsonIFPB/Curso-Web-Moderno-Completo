import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/msgs';
import './config/bootstrap';
import store from './config/store';
import router from './config/router';
import './config/axios';
import './config/mq';

Vue.config.productionTip = false

// TEMPORARIO !!!

// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkRhdmlkc29uIEEuIFhhdmllciIsImVtYWlsIjoiZGF2aWRzb25AZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY0NjIyNDI1MywiZXhwIjoxNjQ2NDgzNDUzfQ.t_lEGgmdOaTnzta4zlIn1bYz4HWGT9YJR-5UbB-H36E'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')