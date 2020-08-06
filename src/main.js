import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@babel/polyfill'
import 'mutationobserver-shim'
import vuetify from './plugins/vuetify'
import VueTextTransition from 'vue-text-transition'
import LottiePlayer from 'lottie-player-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueParticles from 'vue-particles'
import Vuelidate from 'vuelidate'
import VueScrollAnimate from 'vue-scroll-animate'
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.use(VueScrollAnimate)
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.use(LottiePlayer)
Vue.use(VueParticles)

// import TextScrambler from 'text-scrambler'

Vue.config.productionTip = false

Vue.component('vue-text-transition', VueTextTransition)
// axios 預設傳送認證資訊
axios.defaults.withCredentials = true

new Vue({
  created () {
    AOS.init({ disable: 'phone' })
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
