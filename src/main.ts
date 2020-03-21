import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faMedium, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faCode, faHome, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Adicionando ícones do FontAwesome padrão
library.add(faHome, faQuestion, faCode)

// Adicionando ícones do FontAwesome Brands
library.add(faGithub, faLinkedin, faMedium, faTelegram)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
