import { firebaseAuth } from 'boot/firebase'
import { Loading } from 'quasar'

const state = {
  loggedIn: false,
  userName: null,
  email: null,
  claim: null,
  photoURL: null,

}

const mutations = {
  setLoggedIn (state, value) {
    state.loggedIn = value
  },
  setUserInfo (state, user) {
    state.userName = user.displayName
    state.email = user.email
    state.photoURL = user.photoURL
  },
  setToken(state, token) {
    state.token = token
  },
  setClaims(state, claims) {
    state.claims = claims
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
      // console.log('response login: ', response)
      Loading.hide()
    } catch (error) {
      // console.log('error.message: ', error.message)
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
      await firebaseAuth.auth().currentUser.getIdToken(true)
        commit('setUserInfo', {
          displayName: response.user.displayName,
          email: response.user.email,
          photoURL: response.user.photoURL
        })
        commit('setLoggedIn', true)
        response.user.getIdToken()
          .then(token => {
            commit('setToken',token)
            return response.user.getIdTokenResult()
          })
          .then(r => {
            // console.log(r)
            commit('setClaims', r.claims)
          })

      console.log('response login: ', response)
      Loading.hide()
    } catch (error) {
      console.log('error.message: ', error.message)
      Loading.hide()
    }    
  },
  logoutUser ({ commit }) {
    console.log('-logout-')
    try {
      firebaseAuth.auth().signOut()
      commit('setLoggedIn', false)
    } catch (e) {
      console.log(e)
    }
  },
  loggedInOrLoggedOut ({ commit }) {
    console.log('loggedInOrLoggedOut')
    firebaseAuth.auth().onAuthStateChanged(user => {
      Loading.hide()
      console.log(user)
      if (user) {
        commit('setUserInfo', {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          level: user.level
        })
        commit('setLoggedIn', true)  
        user.getIdToken()
          .then(token => {
            commit('setToken',token)
            return user.getIdTokenResult()
          })
          .then(r => {
            console.log(r)
            commit('setClaims', r.claims)
          })                
      } else {
        commit('setLoggedIn', false)
        commit('setUserInfo', {
          displayName: null,
          email: null,
          photoURL: null,
        })
        commit('setToken',null)
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
