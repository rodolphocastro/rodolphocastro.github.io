<template>
  <section>
    <h2>Meu Currículo</h2>
    <p>
      Esta é uma versão resumido do meu currículo. A versão completa pode ser encontrada
      <a href="https://www.linkedin.com/in/rodolpho-alves93/">no meu LinkedIn</a>.
    </p>
    <sobre></sobre>
    <experiencia></experiencia>
    <formacao></formacao>
    <certificacoes></certificacoes>
    <idiomas></idiomas>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import Sobre from '@/components/curriculo/Sobre.vue'
import Experiencia from '@/components/curriculo/Experiencia.vue'
import Formacao from '@/components/curriculo/Formacao.vue'
import Certificacoes from '@/components/curriculo/Certificacoes.vue'
import Idiomas from '@/components/curriculo/Idiomas'

@Component({
  name: 'curriculo',
  components: {
    Sobre,
    Experiencia,
    Formacao,
    Certificacoes,
    Idiomas
  }
})
export default class Curriculo extends Vue {}
</script>
