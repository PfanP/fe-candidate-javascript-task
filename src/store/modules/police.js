import PoliceService from '@/services/PoliceService.js'

export const namespaced = true

export const state = {
  police: {}
}
export const mutations = {
  SET_POLICE(state, police) {
    state.police = police
  }
}
export const actions = {
  fetchPolice({ commit }, id) {
      PoliceService.getPolice(id)
        .then(response => {
          commit('SET_POLICE', response.data)
        })
        .catch(error => {
        })
  }
}