<template>
  <section>
    <h2>Bem vindo ao meu website!</h2>
    <article>
      <h3>Quem sou eu?</h3>
      <p>
        Meu nome é <strong>Rodolpho Alves</strong>, atuo como <em>Arquiteto de Soluções</em> com ênfase na nuvem.
      </p>
      <p>
        Sou entusiasta com tecnologias, sempre buscando expandir o repertório de ferramentas disponíveis para solucionar os problemas apresentados por nossos clientes.
      </p>
      <p>
        No tempo livre sou corredor de rua, marombeiro ávido e gamer! <em>(PC, Playstation4 e Nintendo)</em>
      </p>
    </article>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'home'
})
export default class Home extends Vue {

}
</script>
