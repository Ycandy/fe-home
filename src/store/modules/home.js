import Vue from 'vue'
import Home from 'src/model/home'

let homeApi = new Home()

const state = {
  info: {}
}

const actions = {
  async fetchBasisInfo ({ commit, state }) {
    state.appLoad = true
    let r = await homeApi.get({ target: 'info' })
    console.log(r)
  },
  async fetchList ({ commit, state }, { target, page, perpage }) {
    state.appLoad = true
    let r = await homeApi.get({ target, data: `${page}/${perpage}` })
    console.log(r)
  },
  async fetchNoticeInfo ({ commit, state }, { id }) {
    state.appLoad = true
    let r = await homeApi.get({ target: 'notices', data: id })
    console.log(r)
  }
}

const mutations = {
  setInfo (state, { info }) {
    if (info) {
      state.info = {}
      info.map(item => {
        Vue.set(state.info, item.id, item)
      })
    }
  }
}

export default {
  state,
  actions,
  mutations
}
