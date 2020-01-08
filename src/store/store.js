import Vue from 'vue'
import Vuex from 'vuex'
import * as customer from '@/store/modules/customer.js'
import * as police from '@/store/modules/police.js'
import * as quote from '@/store/modules/quote.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    customer,
    police,
    quote
  },
  state: {
  }
})
