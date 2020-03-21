<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Sobre' }">Sobre</router-link>
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
