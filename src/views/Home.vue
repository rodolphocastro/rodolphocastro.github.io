<template>
  <section>
    <h2>Bem vindo ao meu website!</h2>
    <article>
      <h3>Quem sou eu?</h3>
      <p>
        Meu nome é
        <strong>Rodolpho Alves</strong>, atuo como
        <em>Fullstack Engineer</em> com em sistemas desenvolvidos e publicados
        através da plataforma <em>.NET</em>.
      </p>
      <p>
        Sou entusiasta com tecnologias, sempre buscando expandir o repertório de
        ferramentas disponíveis para solucionar os problemas apresentados por
        nossos clientes.
      </p>
      <p>
        No tempo livre sou corredor de rua, marombeiro e gamer!
        <em>(PC, Playstation e emuladores)</em>
      </p>
    </article>
    <article>
      <h3>Onde me encontrar</h3>
      <p>Estou presente nestas redes sociais:</p>
      <redes-sociais-list></redes-sociais-list>
    </article>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'

@Component({
  name: 'home',
  components: {
    RedesSociaisList: () => import('@/components/home/RedesSociaisList.vue')
  },
  methods: { ...mapActions(['fetchRedesSociais']) }
})
export default class Home extends Vue {
  fetchRedesSociais!: () => void;

  mounted () {
    this.fetchRedesSociais()
  }
}
</script>
