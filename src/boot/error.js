import Vue from 'vue'
import { Notify } from 'quasar'

// Notify.create({
//   message: 'Danger, Will Robinson! Danger!'
// })


Vue.config.errorHandler = e => {
  console.log('here')
  // this.$q.notify({
  //   message: e.message
  // })
}