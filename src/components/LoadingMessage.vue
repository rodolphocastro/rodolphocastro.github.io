<template>
  <div class="loading-message">
    <font-awesome-icon class="loading-spinner" :icon="['fas', 'circle-notch']"></font-awesome-icon>
    <p>Aguarde, carregando...</p>
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

.loading-spinner {
  width: 50px;
  height: 50px;
  color: #fd9a49;
  animation: spin 1s infinite linear;
}

@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}

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
