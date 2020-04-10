import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var state = {
  currentUser: {},
  currentOrg: {},
  resources: [],
  mobile: '',
  pending: 0,
}

var mutations = {
  setUser (state, user) {
    state.currentUser = user
  },
  setOrg (state, org) {
    state.currentOrg = org
  },
  setResources (state, resources) {
    state.resources = resources
  },
  setMobile (state, mobile) {
    state.mobile = mobile
  },
  setPending (state, num) {
    state.pending += num
  },
}

var actions = {
  setUser (context) {
    context.commit('setUser')
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

export default store

