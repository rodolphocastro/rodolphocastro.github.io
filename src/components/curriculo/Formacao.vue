<template>
  <article>
    <h3>Formação Acadêmica</h3>
    <dl>
      <dt>Universidade Tecnológica Federal do Paraná</dt>
      <dd>
        <p>Bacharelado em Sistemas de Informação (2012 - 2016)</p>
        <p>Curso voltado à aplicação da informática em empresas e instituições públicas e privadas.</p>
        <p>A atuação abrange áreas como desenvolvimento, gerência, projeto, instalação e administração de sistemas, redes de computadores, bancos de dados, sítios e portais para Internet, comércio e marketing eletrônicos, sistemas móveis, sem fio e outras tecnologias emergentes.</p>
        <p>Além disso, a formação abrangente o habilita a gerenciar atividades, envolvendo tecnologias da informação em geral, coordenando equipes de trabalho e definindo o uso, segurança e planejamento de recursos informáticos para resolver problemas das organizações, assim como para consultoria em pesquisa e desenvolvimento.</p>
        <a href="https://portal.utfpr.edu.br/cursos/graduacao/bacharelado/sistemas-de-informacao">Maiores informações sobre o curso</a>
      </dd>
      <dt>Centro Federal de Educação Tecnológica de São Paulo (CEFET/SP)</dt>
      <dd>
        <p>Ensino Médio - Convencional (2008 - 2011)</p>
        <p>Ensino médio convencional com duração de três anos.</p>
      </dd>
    </dl>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'formacao'
})
export default class Formacao extends Vue {}
</script>
