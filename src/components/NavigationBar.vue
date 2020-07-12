<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">
          <font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Curriculo' }">
          <font-awesome-icon :icon="['fas', 'file-contract']"></font-awesome-icon>Currículo
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Posts' }">
          <font-awesome-icon :icon="['fas', 'file']"></font-awesome-icon>Posts
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Tecnologias' }">
          <font-awesome-icon :icon="['fas', 'code']"></font-awesome-icon>Tecnologias
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Projetos' }">
          <font-awesome-icon :icon="['fas', 'box-open']"></font-awesome-icon>Projetos
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Sobre' }">
          <font-awesome-icon :icon="['fas', 'question']"></font-awesome-icon>Sobre
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'navigation-bar'
})
export default class NavigationBar extends Vue {}
</script>

<style scoped>
svg {
  margin-right: 5px;
}

a,
nav {
  text-decoration: none;
}
</style>
