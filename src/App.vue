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

<style scoped>
h1 {
  text-overflow: ellipsis;
}
</style>
