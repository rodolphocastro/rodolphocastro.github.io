<template>
  <section>
    <h2>Meus Projetos</h2>
    <p>
      Estes são os repositórios
      <em>públicos</em> nos quais participo.
    </p>
    <small>Recuperados automaticamente do meu perfil no GitHub. Os projetos executados para clientes podem ser encontrados em meu perfil do LinkedIn.</small>
    <hr />
    <template v-if="repositories.length">
      <projeto-article v-for="repo in repositories" :key="repo.id" :repo="repo"></projeto-article>
    </template>
    <template v-else>
      <p>Nada foi encontrado!</p>
    </template>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapActions, mapState } from 'vuex'
import { Repository } from '@/models/github/Repository'

@Component({
  name: 'projetos',
  computed: { ...mapState('projetos', ['repositories']) },
  methods: { ...mapActions('projetos', ['fetchRepositories']) },
  components: {
    ProjetoArticle: () => import('@/components/projetos/ProjetoArticle.vue')
  }
})
export default class Projetos extends Vue {
  fetchRepositories!: () => Promise<void>;
  repositories!: Repository[];

  async mounted () {
    await this.fetchRepositories()
  }
}
</script>
