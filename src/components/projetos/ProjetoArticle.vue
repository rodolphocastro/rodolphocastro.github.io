<template>
  <article>
    <h3>{{repo.name}}</h3>
    <small>{{repo.full_name}}</small>
    <p>{{repo.description}}</p>
    <a :href="repo.html_url">Abrir no GitHub</a>
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
