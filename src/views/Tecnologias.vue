<template>
  <section>
    <h2>Tecnologias</h2>
    <p>
      Estas são as
      <em>principais</em> tecnologias com as quais trabalho.
    </p>
    <p>
      <small>A <em>familiaridade</em> é medida de 0 a 5, com base nas vezes que utilizei essa tecnologia e o quão confortável sou com ela</small>
    </p>
    <hr />
    <label>
      Filtrar
      <input type="text" placeholder="Filtre com base no nome ou descrição" v-model.trim="textoFiltro">
    </label>
    <hr />
    <template v-if="tecnologiasFiltradas.length">
      <dl>
        <tecnologia-article v-for="tecnologia in tecnologiasFiltradas" :key="tecnologia.name" :tech="tecnologia"></tecnologia-article>
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
  textoFiltro = '';

  get tecnologiasFiltradas (): Tecnologia[] {
    const { tecnologias, textoFiltro } = this
    const filtroUpper = textoFiltro.toUpperCase()

    if (filtroUpper) {
      return tecnologias.filter(t =>
        t.name.toUpperCase().includes(filtroUpper) ||
        t.description.toUpperCase().includes(filtroUpper)
      )
    }

    return tecnologias
  }

  mounted () {
    this.fetchTecnologias()
  }
}
</script>
