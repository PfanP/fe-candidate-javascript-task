import Vue from 'vue'
import Router from 'vue-router'
import moment from 'moment'
import CustomerList from './views/CustomerList.vue'
import CustomerShow from './views/CustomerShow.vue'
import PoliceShow from './views/PoliceShow.vue'
import QuoteShow from './views/QuoteShow.vue'

Vue.use(Router)
Vue.prototype.moment = moment
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'customer-list',
      component: CustomerList
    },
    {
      path: '/customer/:id',
      name: 'customer-show',
      component: CustomerShow,
      props: true
    },
    {
        path: '/police/:id',
        name: 'police-show',
        component: PoliceShow,
        props: true
    },
    {
        path: '/quote/:id',
        name: 'quote-show',
        component: QuoteShow,
        props: true
    },
    ]
})
