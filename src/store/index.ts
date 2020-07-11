import { RedeSocial } from '@/models/RedeSocial'
import Vue from 'vue'
import Vuex from 'vuex'
import { projetos } from './projetos/'
import { posts } from './posts/'
import { state } from './state'
import { Tecnologia } from '@/models/Tecnologia'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    setRedesSociais (state, novasRedes: RedeSocial[]) {
      state.redesSociais = novasRedes
    },
    setTecnologias (state, novasTecnologias: Tecnologia[]) {
      state.tecnologias = novasTecnologias
    }
  },
  actions: {
    fetchRedesSociais ({ commit }) {
      const novasRedes: RedeSocial[] = [
        {
          name: 'GitHub',
          username: '@rodolphocastro',
          profileUrl: new URL('https://github.com/rodolphocastro'),
          redeIcon: { faType: 'fab', faIcon: 'github' }
        },
        {
          name: 'LinkedIn',
          username: '@rodolpho-alves93',
          profileUrl: new URL('https://www.linkedin.com/in/rodolpho-alves93'),
          redeIcon: { faType: 'fab', faIcon: 'linkedin' }
        },
        {
          name: 'Medium',
          username: '@rodolpho.castro.a',
          profileUrl: new URL('https://medium.com/@rodolpho.castro.a'),
          redeIcon: { faType: 'fab', faIcon: 'medium' }
        },
        {
          name: 'Dev.To',
          username: '@ardc_overflow',
          profileUrl: new URL('https://dev.to/ardc_overflow'),
          redeIcon: { faType: 'fab', faIcon: 'dev' }
        },
        {
          name: 'YouTube',
          username: 'Rodolpho Alves',
          profileUrl: new URL('https://www.youtube.com/channel/UCmWukAQtIWUNAqPA3tHtTZw'),
          redeIcon: { faType: 'fab', faIcon: 'youtube' }
        },
        {
          name: 'Telegram',
          username: '@AlvesRC',
          profileUrl: new URL('https://t.me/AlvesRC'),
          redeIcon: { faType: 'fab', faIcon: 'telegram' }
        }
      ]
      commit('setRedesSociais', novasRedes)
    },
    fetchTecnologias ({ commit }) {
      const tecnologias: Tecnologia[] = [
        {
          name: 'C#',
          description: 'Linguagem de programação, multiparadigma com tipagem forte desenvolvida pela Microsoft para a plataforma .NET',
          stars: 5,
          techUrl: new URL('https://docs.microsoft.com/en-us/dotnet/csharp/'),
          techIcon: { faType: 'fab', faIcon: 'microsoft' }
        },
        {
          name: 'Azure',
          description: 'Cloud da Microsoft, focada em prover soluções ponta-a-ponta com disponibilidade, escalabilidade e confiabilidade',
          stars: 5,
          techUrl: new URL('https://docs.microsoft.com/en-us/azure/'),
          techIcon: { faType: 'fab', faIcon: 'microsoft' }
        },
        {
          name: '.NET Web API',
          description: 'APIs RESTFul utilizando o .NET Framework Core',
          stars: 5,
          techUrl: new URL('https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.1'),
          techIcon: { faType: 'fab', faIcon: 'microsoft' }
        },
        {
          name: '.NET Worker Services',
          description: 'Serviços em background utilizando o .NET Framework Core',
          stars: 4,
          techUrl: new URL('https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-3.1'),
          techIcon: { faType: 'fab', faIcon: 'microsoft' }
        },
        {
          name: '.NET gRPC',
          description: 'Serviços para chamadas remotas utilizando gRPC em serviços .NET Core',
          stars: 3,
          techUrl: new URL('https://docs.microsoft.com/en-us/aspnet/core/grpc/?view=aspnetcore-3.1'),
          techIcon: { faType: 'fab', faIcon: 'microsoft' }
        },
        {
          name: 'Xamarin',
          description: 'Framework para aplicativos mobile, crossplatform, do .NET Framework',
          stars: 4,
          techUrl: new URL('https://docs.microsoft.com/en-us/xamarin/'),
          techIcon: { faType: 'fab', faIcon: 'microsoft' }
        },
        {
          name: '.NET Blazor',
          description: 'Framework para SPA (Single Page Applications) do .NET Framework Core',
          stars: 3,
          techUrl: new URL('https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-3.1'),
          techIcon: { faType: 'fab', faIcon: 'microsoft' }
        },
        {
          name: 'Vue JS',
          description: 'Framework javascript progressivo, focado em prover interfaces gráficas para usuários.',
          stars: 4,
          techUrl: new URL('https://vuejs.org/v2/guide/'),
          techIcon: { faType: 'fab', faIcon: 'vuejs' }
        },
        {
          name: 'Javascript',
          description: 'Linguagem de programação interpretada, permite a implementação de funcionalidades complexas em páginas web (e até outras plataformas)',
          stars: 3,
          techUrl: new URL('https://developer.mozilla.org/en-US/docs/Web/JavaScript'),
          techIcon: { faType: 'fab', faIcon: 'js' }
        },
        {
          name: 'Typescript',
          description: 'Linguagem de programação scripitada, de código aberto, mantida pela Microsoft. É um superset do Javascript, adicionando tipagem e vários outros recursos',
          stars: 4,
          techUrl: new URL('https://www.typescriptlang.org/docs/home'),
          techIcon: { faType: 'fab', faIcon: 'microsoft' }
        },
        {
          name: 'Docker',
          description: 'Tecnologia para a criação de Containers, focado em facilitar a utilização de diversas tecnologias e sistemas pelos desenvolvedores',
          stars: 4,
          techUrl: new URL('https://docs.docker.com/'),
          techIcon: { faType: 'fab', faIcon: 'docker' }
        },
        {
          name: 'Git',
          description: 'Sistema de versionamento de código amplamente utilizado, desenvolvido por Linus Torvalds',
          stars: 5,
          techUrl: new URL('https://git-scm.com/doc'),
          techIcon: { faType: 'fab', faIcon: 'git' }
        },
        {
          name: 'GitHub Actions',
          description: 'Pipelines de Workflows e CI/CD do GitHub, baseadas em Containers',
          stars: 4,
          techUrl: new URL('https://help.github.com/en/actions'),
          techIcon: { faType: 'fab', faIcon: 'github' }
        },
        {
          name: 'Jenkins',
          description: 'Sistema para execução de Pipelines de CI/CD',
          stars: 4,
          techUrl: new URL('https://jenkins.io/'),
          techIcon: { faType: 'fab', faIcon: 'jenkins' }
        },
        {
          name: 'HTML 5',
          description: 'Linguagem de marcação para estruturar e apresentar conteúdo em Páginas Web',
          stars: 4,
          techUrl: new URL('https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'),
          techIcon: { faType: 'fab', faIcon: 'html5' }
        },
        {
          name: 'CSS 3',
          description: 'Linguagem de design que nos permite controlar como elementos HTML serão apresentados aos usuários',
          stars: 3,
          techUrl: new URL('https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS'),
          techIcon: { faType: 'fab', faIcon: 'css3' }
        },
        {
          name: 'AWS (Amazon Web Services)',
          description: 'Cloud pública da Amazon',
          stars: 2,
          techUrl: new URL('https://docs.aws.amazon.com/index.html'),
          techIcon: { faType: 'fab', faIcon: 'aws' }
        },
        {
          name: 'Python',
          description: 'Linguagem de programação interpretada, orientada a objetos e fracamente tipada. Utilizada amplamente no universo de Data Science',
          stars: 3,
          techUrl: new URL('https://docs.python.org/3/'),
          techIcon: { faType: 'fab', faIcon: 'python' }
        },
        {
          name: 'Django',
          description: 'Framework Python para aplicações Web',
          stars: 2,
          techUrl: new URL('https://www.djangoproject.com/'),
          techIcon: { faType: 'fab', faIcon: 'python' }
        },
        {
          name: 'R',
          description: 'Linguagem e ambiente para computação estatística e gráfica',
          stars: 3,
          techUrl: new URL('https://www.r-project.org/'),
          techIcon: { faType: 'fab', faIcon: 'r-project' }
        },
        {
          name: 'PowerBi',
          description: 'Software para visualização e apresentação de dados, dashboards e relatórios',
          stars: 5,
          techUrl: new URL('https://powerbi.microsoft.com/en-us/'),
          techIcon: { faType: 'fab', faIcon: 'microsoft' }
        },
        {
          name: 'Sql Server',
          description: 'Banco de Dados relacionais da Microsoft',
          stars: 5,
          techUrl: new URL('https://docs.microsoft.com/en-us/sql/?view=sql-server-ver15'),
          techIcon: { faType: 'fas', faIcon: 'database' }
        },
        {
          name: 'MySQL',
          description: 'Banco de Dados relacionais, de código aberto, da Oracle',
          stars: 3,
          techUrl: new URL('https://www.mysql.com/'),
          techIcon: { faType: 'fas', faIcon: 'database' }
        },
        {
          name: 'MariaDB',
          description: 'Banco de Dados relacionais, de código aberto, feito pelos desenvolvedores originais do MySQL e focado em manter-se como software livre',
          stars: 4,
          techUrl: new URL('https://mariadb.org/'),
          techIcon: { faType: 'fas', faIcon: 'database' }
        },
        {
          name: 'MongoDB',
          description: 'Banco de Dados não relacional, de código aberto, orientado a documentos',
          stars: 4,
          techUrl: new URL('https://www.mongodb.com/'),
          techIcon: { faType: 'fas', faIcon: 'database' }
        },
        {
          name: 'Cosmos DB',
          description: 'Banco de Dados multimodal da Microsoft, nativo á Cloud e facilmente escalável a nível global',
          stars: 3,
          techUrl: new URL('https://docs.microsoft.com/en-us/azure/cosmos-db/introduction'),
          techIcon: { faType: 'fas', faIcon: 'database' }
        }
      ]
      commit('setTecnologias', tecnologias)
    }
  },
  modules: {
    projetos,
    posts
  }
})
