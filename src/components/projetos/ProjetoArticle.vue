<template>
  <article>
    <h3>{{repo.name}}</h3>
    <small>{{repo.full_name}}</small>
    <p>{{repo.description}}</p>
    <p v-if="repo.language">Desenvolvido em: {{repo.language}}</p>
    <div class="pills" v-if="repo.topics.length">
      <p>
        Tópicos:
      </p>
      <span v-for="topic in repo.topics" v-bind:key="topic"> {{topic}}</span>
    </div>
    <a :href="repo.html_url">
      <font-awesome-icon :icon="['fas', 'link']"></font-awesome-icon>Abrir no GitHub
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
  display: inline-flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: #fd9a49 solid 1px;
}

.pills > p {
  margin-right: .5em;
}

.pills > span {
  display: inline-block;
  height: 1.5em;
  margin: .25em;
  padding: .1em .2em;
  background-color: #fd9a49;
  border-radius: .25em;
  font-weight: bold;
}

.pills > span:hover {
  transition-duration: 200ms;
  background-color:#fdaf49;
}

a {
  display: block;
  text-decoration: none;
}
</style>
