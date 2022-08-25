import Vue from 'vue'
import { createApp } from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import { store } from './store'

createApp(App)
// Vue.use(Vuelidate)
  .use(store)
  .mount('#app')
