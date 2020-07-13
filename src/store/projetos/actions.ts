import { Repository } from '@/models/github/Repository'
import axios from 'axios'
import { ActionTree } from 'vuex'
import { RootStateStorable } from '../state'
import { ProjetosStateStorable } from './state'

const gitHubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json'
  }
})

export const actions: ActionTree<ProjetosStateStorable, RootStateStorable> = {
  async fetchRepositories ({ commit }) {
    commit('setLoading', true)
    try {
      const response = await gitHubApi.get<Repository[]>('/users/rodolphocastro/repos')
      commit('setRepositories', response.data)
    } catch (error) {

    } finally {
      commit('setLoading', false)
    }
  }
}
