import QuoteService from '@/services/QuoteService.js'

export const namespaced = true

export const state = {
  quote: {}
}
export const mutations = {
  SET_QUOTE(state, quote) {
    state.quote = quote
  }
}
export const actions = {
  fetchQuote({ commit }, id) {
      console.log(id)
      QuoteService.getQuote(id)
        .then(response => {
          commit('SET_QUOTE', response.data)
        })
        .catch(error => {
        })
  }
}