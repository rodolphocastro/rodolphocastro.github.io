<template>
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptatum repellendus et vitae consectetur pariatur soluta sed! Libero accusamus obcaecati esse iste facere? Repellat illum aperiam voluptatem nisi similique expedita.</p>
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
