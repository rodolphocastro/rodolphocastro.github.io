<template>
  <section>
    <h2>Meu Currículo</h2>
    <p>
      Esta é uma versão resumido do meu currículo. A versão completa pode ser encontrada
      <a href="https://www.linkedin.com/in/rodolpho-alves93/">no meu LinkedIn</a>.
    </p>
    <!-- TODO: Adicionar articles -->
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'curriculo'
})
export default class Curriculo extends Vue {}
</script>
