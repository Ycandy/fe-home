import Vue from 'vue'
import Home from 'src/model/home'

let homeApi = new Home()

const state = {
}

const actions = {
  async fetchBasisInfo ({ commit, state }) {
    state.appLoad = true
    let r = await homeApi.get({ target: 'info' })
    console.log(r)
    // return api.invoke('fetch')
    //   .then(r => {
    //     console.log('r', r)
    //     return r
    //   })
  },
  async fetchList ({ commit, state }, { target, page, perpage }) {
    state.appLoad = true
    let r = await homeApi.get({ target, data: `${page}/${perpage}` })
    console.log(r)
    // return api.invoke('fetch')
    //   .then(r => {
    //     console.log('r', r)
    //     return r
    //   })
  },
  async fetchNoticeInfo ({ commit, state }, { id }) {
    state.appLoad = true
    let r = await homeApi.get({ target: 'notices', data: id })
    console.log(r)
    // return api.invoke('fetch')
    //   .then(r => {
    //     console.log('r', r)
    //     return r
    //   })
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
