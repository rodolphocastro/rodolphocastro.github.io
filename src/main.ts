import { library } from '@fortawesome/fontawesome-svg-core'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Adicionando ícones do FontAwesome padrão
library.add(faHome, faQuestion)

// Adicionando ícones do FontAwesome Brands
// library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
