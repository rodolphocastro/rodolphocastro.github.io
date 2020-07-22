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
      const staggered: Repository[] = []
      response.data.forEach((r, i) => {
        const delay = i * 300 // 300m -> Time to wait for each item in the array
        setTimeout(() => {
          staggered.push(r)
          commit('setRepositories', staggered)
        }, delay)
      })
    } catch (error) {

    } finally {
      commit('setLoading', false)
    }
  }
}
