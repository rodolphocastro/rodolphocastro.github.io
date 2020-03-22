<template>
  <section>
    <h2>Tecnologias</h2>
    <p>
      Estas são as <em>principais</em> tecnologias com as quais trabalho
    </p>
    <hr />
    <template v-if="tecnologias.length">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis totam corrupti pariatur neque laudantium nisi. Suscipit rem magni accusamus dolores earum totam ipsum odio nisi nobis, corporis omnis quaerat!</p>
    </template>
    <template v-else>
      <p>Nada foi encontrado!</p>
    </template>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Tecnologia } from '../models/Tecnologia'
import { mapState, mapActions } from 'vuex'

@Component({
  name: 'tecnologias',
  computed: { ...mapState(['tecnologias']) },
  methods: { ...mapActions(['fetchTecnologias']) }
})
export default class Tecnologias extends Vue {
  tecnologias!: Tecnologia[];
  private fetchTecnologias!: () => void;
}
</script>
