import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAnime from 'vue-animejs'
import VuePageTransition from 'vue-page-transition'
import AudioRecorder from 'vue-audio-recorder'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://abjad.test/api/'
axios.defaults.headers.Authorization = `Bearer ${store.state.token}`

Vue.use(VueAxios, axios)
Vue.use(AudioRecorder)
Vue.use(VueAnime)
Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
