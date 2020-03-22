<template>
  <section>
    <h2>Tecnologias</h2>
    <p>
      Estas são as
      <em>principais</em> tecnologias com as quais trabalho
    </p>
    <hr />
    <template v-if="tecnologias.length">
      <dl>
        <tecnologia-article v-for="tecnologia in tecnologias" :key="tecnologia.name" :tech="tecnologia"></tecnologia-article>
      </dl>
    </template>
    <template v-else>
      <p>Nada foi encontrado!</p>
    </template>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Tecnologia } from '@/models/Tecnologia'
import { mapState, mapActions } from 'vuex'
import TecnologiaArticle from '@/components/tecnologias/TecnologiaArticle.vue'

@Component({
  name: 'tecnologias',
  computed: { ...mapState(['tecnologias']) },
  methods: { ...mapActions(['fetchTecnologias']) },
  components: {
    TecnologiaArticle
  }
})
export default class Tecnologias extends Vue {
  private fetchTecnologias!: () => void;
  tecnologias!: Tecnologia[];

  mounted () {
    this.fetchTecnologias()
  }
}
</script>
