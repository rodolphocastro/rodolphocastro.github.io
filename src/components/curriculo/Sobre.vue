<template>
  <article>
    <h3>Sobre</h3>
    <p>Minha formação e experiência entregam que trabalho com Ti , hoje como Analista de Sistemas.</p>
    <p>Mas, se me permite, em meu tempo de carreira entendi que nesse ramo não posso ser apenas um analista. São pelos desafios diários de tornar um problema em solução, entender este problema e planejar e executá-la, da melhor maneira possível e usando as tecnologias certas que me guio. Mantenho-me sempre acompanhando as novidades e vendo como utilizá-las de modo a trazer valor real.</p>
    <p>Creio que a TI não existe por si só, e que o valor real das soluções está no relacionamento com as pessoas e na resolução dos problemas de maneira que as empodere, para que possam focar nas coisas realmente importantes. Estou aqui para conversar com você, compreender suas necessidades e traduzi-las para a melhor solução para você e para sua empresa.</p>
    <p>Algumas de minhas especialidades são: análise e desenvolvimento de soluções ( web, mobile e desktop utilizando c#, javascript, R e python), extração de informações através de Data Science e apresentação por meio de relatórios e dashboards personalizados, automatização dos processos de teste, compilação e disponibilização de sistemas.</p>
    <p>
      Para maiores detalhes sobre as tecnologias com as quais trabalho acesse a página
      <router-link :to="{ name:'Tecnologias' }">Tecnologias</router-link> e a página <router-link :to="{ name: 'Projetos' }">Projetos</router-link>
    </p>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'sobre'
})
export default class Sobre extends Vue {}
</script>
