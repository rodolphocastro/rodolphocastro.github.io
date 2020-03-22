<template>
  <article>
    <h3>Experiência</h3>
    <dl>
      <dt>MPS Informática ltda</dt>
      <dd>
        <ol>
          <li>
            <strong>Analista de Sistemas</strong>, 05/2018 - Atualmente
          </li>
          <li>
            <strong>Desenvolvedor</strong>, 01/2017 - 05/2018
          </li>
          <li>
            <strong>Estagiário</strong>, 07/2015 - 12/2016
          </li>
        </ol>
      </dd>
      <dt>Universidade Tecnológica Federal do Paraná</dt>
      <dd>
        <ol>
          <li>
            <strong>Bolsista PET-CoCE</strong>, 04/2013 - 04/2015
          </li>
        </ol>
      </dd>
    </dl>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'experiencia'
})
export default class Experiencia extends Vue {}
</script>
