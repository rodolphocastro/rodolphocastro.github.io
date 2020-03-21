<template>
  <ul>
    <li>
      <span>
        <abbr title="GitHub">
          <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
        </abbr>
        <a href="https://github.com/rodolphocastro">@rodolphocastro</a>
      </span>
    </li>
    <li>
      <span>
        <abbr title="LinkedIn">
          <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
        </abbr>
        <a href="https://www.linkedin.com/in/rodolpho-alves93">@rodolpho-alves93</a>
      </span>
    </li>
    <li>
      <span>
        <abbr title="Medium">
          <font-awesome-icon :icon="['fab', 'medium']"></font-awesome-icon>
        </abbr>
        <a href="https://medium.com/@rodolpho.castro.a">@rodolpho.castro.a</a>
      </span>
    </li>
    <li>
      <span>
        <abbr title="Telegram">
          <font-awesome-icon :icon="['fab', 'telegram']"></font-awesome-icon>
        </abbr>
        <a href="https://t.me/AlvesRC">@AlvesRC</a>
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'redes-sociais-list'
})
export default class RedesSociaisList extends Vue {}
</script>

<style scoped>

svg {
  margin-right: 5px;
}

a {
  text-decoration: none;
}

</style>
