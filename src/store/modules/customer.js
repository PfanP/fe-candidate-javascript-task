import CustomerService from '@/services/CustomerService.js'
import QuoteService from '@/services/QuoteService.js'
import PoliceService from '@/services/PoliceService.js'

export const namespaced = true

export const state = {
  customers: [
  ],
  customersTotal: 0,
  customer: {}
}
export const mutations = {
  SET_CUSTOMERS(state, customers) {
    state.customers = customers
  },
  ADD_TOTAL(state, customer) {
    state.customersTotal = customer
  },
  SET_CUSTOMER(state, customer) {
    state.customer = customer
  }
}
export const actions = {
  fetchCustomers({ commit, dispatch }, { perPage, page }) {
    CustomerService.getCustomers(perPage, page)
      .then(async response => {
        commit('ADD_TOTAL', response.headers['x-total-count'])
        const customers = []
        await Promise.all(
            response.data.map(async customer => {
                const quoteResponse = await QuoteService.getQuoteByCustomer(customer.uuid)
                const policeResponse = await PoliceService.getPoliceByCustomer(customer.uuid)
                customers.push({
                    customerInfo: customer,
                    quoteInfo: quoteResponse.data,
                    policeInfo: policeResponse.data
                })
            })
        )
        console.log(customers)
        commit('SET_CUSTOMERS', customers)
      })
      .catch(error => {
      })
  },
  fetchCustomer({ commit, getters, dispatch }, id) {
    var customer = getters.getCustomerById(id)
    if (customer) {
      commit('SET_CUSTOMER', customer)
    } else {
      CustomerService.getCustomer(id)
        .then(response => {
          commit('SET_CUSTOMER', response.data)
        })
        .catch(error => {
        })
    }
  }
}
export const getters = {
  getCustomerById: state => id => {
    return state.customers.find(customer => customer.id === id)
  }
}
