<template>
  <section>
    <h2>Meus Projetos</h2>
    <p>Estes são os repositórios <em>públicos</em> nos quais participo.</p>
    <small>Eles são recuperados automaticamente do meu perfil no GitHub, então não estão em nenhuma ordem específica!</small>
    <article v-for="repo in repositories" :key="repo.id">
      <h3>{{repo.name}}</h3>
      <small>{{repo.full_name}}</small>
      <p>{{repo.description}}</p>
      <a :href="repo.html_url">Abrir no GitHub</a>
    </article>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapActions, mapState } from 'vuex'
import { Repository } from '@/models/github/Repository'

@Component({
  name: 'projetos',
  computed: { ...mapState('projetos', ['repositories']) },
  methods: { ...mapActions('projetos', ['fetchRepositories']) }
})
export default class Projetos extends Vue {
  fetchRepositories!: () => Promise<void>;
  repositories!: Repository[];

  async mounted () {
    await this.fetchRepositories()
  }
}
</script>
