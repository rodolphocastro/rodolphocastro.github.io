<template>
  <article>
    <h3>{{repo.name}}</h3>
    <small>{{repo.full_name}}</small>
    <p>{{repo.description}}</p>
    <p v-if="repo.language">Desenvolvido em: {{repo.language}}</p>
    <div class="pills" v-if="repo.topics.length">
      <p>Tópicos: {{repo.topics.join(', ')}}</p>
    </div>
    <a :href="repo.html_url">
      <font-awesome-icon :icon="['fas', 'link']"></font-awesome-icon>
      Abrir no GitHub
    </a>
  </article>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Repository } from '@/models/github/Repository'

@Component({
  name: 'projeto-article'
})
export default class ProjetoArticle extends Vue {
  @Prop({ required: true }) readonly repo!: Repository;
}
</script>

<style scoped>

.pills {
  margin-bottom: 1em;
}

a {
  text-decoration: none;
}

</style>
