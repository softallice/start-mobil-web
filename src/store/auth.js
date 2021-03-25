import { firebaseAuth } from 'boot/firebase'
import { Loading } from 'quasar'

const state = {
  loggedIn: false
}

const mutations = {
  setLoggedIn (state, value) {
    state.loggedIn = value
  }
}

const actions = {
  async registerUser ({ commit }, payload) {
    Loading.show()
    try {
      const provider = new firebaseAuth.auth.GoogleAuthProvider()
      firebaseAuth.auth().languageCode = 'ko'
      const response = await firebaseAuth.auth().signInWithPopup(provider)
      console.log('response register: ', response)
    } catch (error) {
      console.log('error.message: ', error.message)
    }
  },
  async loginUser ({ commit }, payload) {
    Loading.show()
    try {
      const provider = new firebaseAuth.auth.GoogleAuthProvider()
      firebaseAuth.auth().languageCode = 'ko'
      const response = await firebaseAuth.auth().signInWithPopup(provider)
      commit('setLoggedIn', true)
      console.log('response login: ', response)
      Loading.hide()
    } catch (error) {
      console.log('error.message: ', error.message)
      Loading.hide()
    }
    
  },
  logoutUser () {
    console.log('-logout-')
    firebaseAuth.auth().signOut()
    commit('setLoggedIn', false)
  },
  loggedInOrLoggedOut ({ commit }) {
    console.log('loggedInOrLoggedOut')
    firebaseAuth.auth().onAuthStateChanged(user => {
      Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
      } else {
        commit('setLoggedIn', false)
      }
    })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
