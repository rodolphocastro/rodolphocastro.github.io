<template>
  <div id="app">
    <header id="nav">
      <h1>ARdC Homepage</h1>
      <p>Minha página pessoal no GitHub</p>
      <navigation-bar></navigation-bar>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'app',
  components: {
    NavigationBar: () => import('@/components/NavigationBar.vue')
  }
})
export default class App extends Vue {
}

</script>

<style src='awsm.css/dist/awsm_theme_black.min.css'>
</style>

<style>
h1 {
  text-overflow: ellipsis;
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
