<template>
  <section>
    <h2>Meus Projetos</h2>
    <p>Estes são os repositórios <em>públicos</em> nos quais participo</p>
    <article>
      <h3>W.I.P.</h3>
    </article>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapActions } from 'vuex'

@Component({
  name: 'projetos',
  methods: { ...mapActions('projetos', ['fetchRepositories']) }
})
export default class Projetos extends Vue {
  fetchRepositories!: () => Promise<void>;

  async mounted () {
    await this.fetchRepositories()
  }
}
</script>
