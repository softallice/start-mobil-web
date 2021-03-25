// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import Vue from 'vue'
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
// import store from "../store"


import firebaseConfig from "app/firebaseConfig"

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase = firebase

const firebaseAuth = firebase

export { firebaseAuth }



// firebase.auth().onAuthStateChanged((user) => {
    
//     Store.commit('user/setUser', user)

//     if (user) {
//         console.log(user)
        
        
//     } else {
//         console.log('... user')
//     }
// })