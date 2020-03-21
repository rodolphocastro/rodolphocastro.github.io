import { RedeSocial } from '@/models/RedeSocial'
import Vue from 'vue'
import Vuex from 'vuex'
import { projetos } from './projetos/'
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
          description: 'Linguagem orientada a objetos da Microsoft',
          stars: 5,
          techUrl: new URL('https://docs.microsoft.com/en-us/dotnet/csharp/'),
          techIcon: { faType: 'fab', faIcon: 'microsoft' }
        }
      ]
      // TODO: Adicionar as outras tecnologias
      commit('setTecnologias', tecnologias)
    }
  },
  modules: {
    projetos
  }
})
