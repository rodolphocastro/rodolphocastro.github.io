<template>
  <section>
    <h2>Meus Projetos</h2>
    <p>
      Estes são os repositórios
      <em>públicos</em> nos quais participo.
    </p>
    <p>
      <small>Recuperados automaticamente do meu perfil no GitHub. Os projetos executados para clientes podem ser encontrados em meu perfil do LinkedIn.</small>
    </p>
    <label>
      Filtrar
      <input
        type="text"
        placeholder="Filtre com base no nome, tópico ou linguagem"
        v-model.trim="textoFiltro"
      />
    </label>
    <hr />
    <template v-if="loading">
      <loading></loading>
    </template>
    <template v-else-if="repositories.length">
      <projeto-article v-for="repo in repositoriosFiltrados" :key="repo.id" :repo="repo"></projeto-article>
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
  computed: { ...mapState('projetos', ['repositories', 'loading']) },
  methods: { ...mapActions('projetos', ['fetchRepositories']) },
  components: {
    ProjetoArticle: () => import('@/components/projetos/ProjetoArticle.vue'),
    loading: () => import('@/components/LoadingMessage.vue')
  }
})
export default class Projetos extends Vue {
  fetchRepositories!: () => Promise<void>;
  repositories!: Repository[];
  loading!: boolean;
  textoFiltro = '';

  get repositoriosFiltrados (): Repository[] {
    const { textoFiltro, repositories } = this
    const filtroUpper = textoFiltro.toUpperCase()

    if (filtroUpper) {
      return repositories.filter(r =>
        r.name.toUpperCase().includes(filtroUpper) ||
        r.language?.toUpperCase().includes(filtroUpper) ||
        r.topics.map(t => t.toUpperCase()).some(t => t.includes(filtroUpper)))
    }

    return repositories
  }

  async mounted () {
    await this.fetchRepositories()
  }
}
</script>
