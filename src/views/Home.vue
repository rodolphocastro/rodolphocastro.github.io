<template>
  <section>
    <h2>Bem vindo ao meu website!</h2>
    <article>
      <h3>Quem sou eu?</h3>
      <p>
        Meu nome é
        <strong>Rodolpho Alves</strong>, atuo como
        <em>Arquiteto de Soluções</em> com ênfase na nuvem.
      </p>
      <p>Sou entusiasta com tecnologias, sempre buscando expandir o repertório de ferramentas disponíveis para solucionar os problemas apresentados por nossos clientes.</p>
      <p>
        No tempo livre sou corredor de rua, marombeiro ávido e gamer!
        <em>(PC, Playstation4 e Nintendo)</em>
      </p>
    </article>
    <article>
      <h3>Onde me encontrar</h3>
      <p>Estou presente nestas redes sociais:</p>
      <ul>
        <li>
          <span>
            <abbr title="GitHub">
              <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
            </abbr>
            <a href="https://github.com/rodolphocastro">@rodolphocastro</a>
          </span>
        </li>
        <li>
          <span>
            <abbr title="LinkedIn">
              <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
            </abbr>
            <a href="https://www.linkedin.com/in/rodolpho-alves93">@rodolpho-alves93</a>
          </span>
        </li>
        <li>
          <span>
            <abbr title="Medium">
              <font-awesome-icon :icon="['fab', 'medium']"></font-awesome-icon>
            </abbr>
            <a href="https://medium.com/@rodolpho.castro.a">@rodolpho.castro.a</a>
          </span>
        </li>
        <li>
          <span>
            <abbr title="Telegram">
              <font-awesome-icon :icon="['fab', 'telegram']"></font-awesome-icon>
            </abbr>
            <a href="https://t.me/AlvesRC">@AlvesRC</a>
          </span>
          </li>
      </ul>
    </article>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'home'
})
export default class Home extends Vue {}
</script>

<style scoped>

svg {
  margin-right: 5px;
}

a {
  text-decoration: none;
}

</style>
