import Api from '../api'
import Vue from 'vue'

let api = new Api('home')

const state = {
}

const actions = {
  fetchBasisInfo ({ commit, state }) {
    state.appLoad = true
    return api.invoke('fetch')
      .then(r => {
        console.log('r', r)
        return r
      })
  }
}

const mutations = {
  setApplications (state, { applications }) {
    if (applications) {
      state.applications = {}
      applications.map(item => {
        Vue.set(state.applications, item.id, item)
      })
    }
  }
}

export default {
  state,
  actions,
  mutations
}
