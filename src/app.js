import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import configurationData from './common/common'
import { sync } from 'vuex-router-sync'
import { Input, Button, Select, OptionGroup, Option, RadioGroup, Radio, Loading, Message, Cascader, DatePicker } from 'element-ui'
import axios from 'axios'

const store = createStore()

const router = createRouter(store)
sync(store, router)

router.beforeResolve((to, from, next) => {
  const matched = router.getMatchedComponents(to)

  Promise.all(matched.map(c => {
    if (c.asyncData) {
      return c.asyncData({ store, route: to })
    }
  })).then(() => {
    next()
  }).catch(next)
})

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(OptionGroup)
Vue.use(Option)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Cascader)
Vue.use(DatePicker)
Vue.prototype.global = configurationData

axios.defaults.timeout = 5000
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

/* eslint-disable no-undef */
Vue.prototype.$config = CONFIG

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
