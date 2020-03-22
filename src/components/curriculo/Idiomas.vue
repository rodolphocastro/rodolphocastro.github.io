<template>
  <article>
    <h3>Idiomas</h3>
    <ul>
      <li>Português (Brasileiro) - Nativo</li>
      <li>Inglês - Fluente</li>
      <li>Espanhol - Intermediário</li>
      <li>Francês - Intermediário</li>
    </ul>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'idiomas'
})
export default class Idiomas extends Vue {}
</script>
