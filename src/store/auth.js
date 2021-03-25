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
  // 이메일/패스워드 회원가입
  async registerUser ({ commit }, payload) {
    Loading.show()
    // 01. 사용자 등록(이메일, 패스워드)
    try {
      const response = await firebaseAuth.auth.createUserWithEmailAndPassword(payload.email, payload.password)
      console.log('response: ', response)
    } catch (error) {
      console.log('error.message: ', error.message)
    }
    //02. 사용자 프로필 업데이트(이름 변경)
    try {
      const user = firebaseAuth.auth().currentUser
      const result = await user.updateProfile({
        displayName : payload.lastName + payload.firstName
      })
    } catch (errer ){
      console.log('error.message: ', error.message)
    }
  },
  // 일반 패스워드/비밀번호 로그인
  async emailLoginUser ({ commit }, payload) {
    Loading.show()
    try {
      const response = await firebaseAuth.auth().signInWithEmailAndPassword(payload.email, payload.password)
      commit('setLoggedIn', true)
      console.log('response login: ', response)
      Loading.hide()
    } catch (error) {
      console.log('error.message: ', error.message)
      Loading.hide()
    }    
  },
  // 구글 회원 가입
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
