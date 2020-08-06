import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    error: {
      show: false,
      message: ''
    }
  },
  mutations: {
    // 登入寫入data
    login (state, data) {
      state.user = data
    },
    // 登出把user 清空
    logout (state) {
      state.user = ''
    },
    error (state, data) {
      state.error = data
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    }
  },
  actions: {
  },
  modules: {
  },
  // 伴隨 vuex-persistedstate寫入
  plugins: [createPersistedState()]
})
