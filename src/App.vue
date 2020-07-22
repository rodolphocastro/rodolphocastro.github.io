<template>
  <div id="app">
    <header id="nav">
      <h1>ARdC Homepage</h1>
      <p>Minha página pessoal no GitHub</p>
      <navigation-bar></navigation-bar>
    </header>
    <main>
      <transition name="fade">
        <router-view/>
      </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.50s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
