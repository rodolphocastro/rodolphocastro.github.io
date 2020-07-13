<template>
  <div class="loading-message">
    <p>Aguarde, carregando...</p>
    <progress></progress>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'loading-message'
})
export default class LoadingMessage extends Vue {}
</script>

<style scoped>
.loading-message {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  align-content: center;
  width: 100%;
}

.loading-message > * {
  display: block;
  width: 100%;
  flex-grow: 1;
}
</style>
