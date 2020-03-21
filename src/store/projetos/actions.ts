import { Repository } from '@/models/github/Repository'
import axios from 'axios'
import { ActionTree } from 'vuex'
import { RootStateStorable } from '../state'
import { ProjetosStateStorable } from './state'

const gitHubApi = axios.create({
  baseURL: 'https://api.github.com'
})

export const actions: ActionTree<ProjetosStateStorable, RootStateStorable> = {
  async fetchRepositories ({ commit }) {
    try {
      const response = await gitHubApi.get<Repository[]>('/users/rodolphocastro/repos')
      commit('setRepositories', response.data)
    } catch (error) {

    }
  }
}
