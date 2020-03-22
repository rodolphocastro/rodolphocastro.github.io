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

@Component({
  name: 'curriculo',
  components: {
    Sobre: () => import('@/components/curriculo/Sobre.vue'),
    Experiencia: () => import('@/components/curriculo/Experiencia.vue'),
    Formacao: () => import('@/components/curriculo/Formacao.vue'),
    Certificacoes: () => import('@/components/curriculo/Certificacoes.vue'),
    Idiomas: () => import('@/components/curriculo/Idiomas.vue')
  }
})
export default class Curriculo extends Vue {}
</script>
