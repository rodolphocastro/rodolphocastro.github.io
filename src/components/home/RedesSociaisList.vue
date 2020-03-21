<template>
  <ul>
    <li v-for="rede in redesSociais" :key="rede.name">
      <span>
        <abbr :title="rede.name">
          <template v-if="rede.redeIcon">
            <font-awesome-icon :icon="[rede.redeIcon.faType, rede.redeIcon.faIcon]"></font-awesome-icon>
          </template>
          <template v-else>{{rede.name}}</template>
        </abbr>
        <a :href="rede.profileUrl">{{rede.username}}</a>
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState, mapActions } from 'vuex'
import { RedeSocial } from '@/models/RedeSocial'

@Component({
  name: 'redes-sociais-list',
  computed: { ...mapState(['redesSociais']) },
  methods: { ...mapActions(['fetchRedesSociais']) }
})
export default class RedesSociaisList extends Vue {
  fetchRedesSociais!: () => void;
  redesSociais!: RedeSocial[];

  mounted () {
    this.fetchRedesSociais()
  }
}
</script>

<style scoped>
svg {
  margin-right: 5px;
}

a {
  text-decoration: none;
}
</style>
