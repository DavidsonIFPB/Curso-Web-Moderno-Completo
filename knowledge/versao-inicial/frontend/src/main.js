import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/msgs'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO !!!

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkRhdmlkc29uIEEuIFhhdmllciIsImVtYWlsIjoiZGF2aWRzb25AZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY0NTU3NTc1NCwiZXhwIjoxNjQ1ODM0OTU0fQ.oxr2qXsUNbN-Am3C0Vl-38DDdNlZZfDwo9ddskNTl3A'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')