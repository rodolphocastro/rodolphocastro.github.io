<template>
  <section>
    <h2>Sobre</h2>
    <article>
      <h3>Propósito</h3>
      <p>
        A ideia deste site, neste formato, é apresentar informações sobre mim, meus projetos e demonstrar a utilização de
        <abbr
          title="Framework Javascript para Frontends"
        >VueJS</abbr>
        em um sistema de hospedagem estática
      </p>
    </article>
    <article>
      <h3>Tecnologias Utilizadas</h3>
      <p>As seguintes tecnologias e bibliotecas são utilizadas neste site:</p>
      <ul>
        <li><a href="https://vuejs.org/">Vue.js</a></li>
        <li><a href="https://cli.vuejs.org/">Vue CLI</a></li>
        <li><a href="https://router.vuejs.org/">Vue Router</a></li>
        <li><a href="https://vuex.vuejs.org/">Vuex</a></li>
        <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
        <li><a href="https://eslint.org/">Eslint</a></li>
        <li><a href="https://igoradamenko.github.io/awsm.css/">Awsm.css</a></li>
        <li><a href="https://github.com/axios/axios">Axios</a></li>
        <li><a href="https://github.com/FortAwesome/vue-fontawesome">FortAwesome</a></li>
      </ul>
    </article>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'about'
})
export default class About extends Vue {

}

</script>
