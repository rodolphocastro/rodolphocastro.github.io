<template>
  <article>
    <dt>
      <h3>
        <font-awesome-icon v-if="tech.techIcon" :icon="[tech.techIcon.faType, tech.techIcon.faIcon]"></font-awesome-icon>
        {{tech.name}}
      </h3>
    </dt>
    <dd>
      <p><em>{{tech.description}}</em></p>
      <label>
        Avaliação:
        <meter min="0" max="5" :value="tech.stars"></meter>
      </label>
      <p>
        <a :href="tech.techUrl">
          <font-awesome-icon :icon="['fas', 'link']"></font-awesome-icon>Documentação
        </a>
      </p>
    </dd>
  </article>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Tecnologia } from '@/models/Tecnologia'

@Component({
  name: 'tecnologia-article'
})
export default class TecnologiaArticle extends Vue {
  @Prop({ required: true }) tech!: Tecnologia;
}
</script>

<style scoped>

a {
  text-decoration: none;
}

svg {
  margin-right: 5px;
}

</style>
