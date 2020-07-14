import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueResource from 'vue-resource'
import VueFilterDateFormat from 'vue-filter-date-format';
import moment from 'moment'

Vue.config.productionTip = false
Vue.prototype.moment = moment
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Chartkick.use(Chart))
Vue.use(VueResource)
Vue.use(VueFilterDateFormat);




new Vue({
  render: h => h(App),
}).$mount('#app')

