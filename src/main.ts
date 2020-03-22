import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faMedium, faTelegram, faMicrosoft, faVuejs, faDocker, faJs, faGit, faJenkins, faHtml5, faCss3, faAws, faPython } from '@fortawesome/free-brands-svg-icons'
import { faCode, faHome, faLink, faQuestion, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Adicionando ícones do FontAwesome padrão
library.add(faHome, faQuestion, faCode, faLink, faBoxOpen)

// Adicionando ícones do FontAwesome Brands
library.add(
  faGithub, faLinkedin, faMedium,
  faTelegram, faMicrosoft, faVuejs,
  faDocker, faJs, faGit,
  faJenkins, faHtml5, faCss3,
  faAws, faPython)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
