import { Post } from '@/models/devto/Post'
import axios from 'axios'
import { ActionTree } from 'vuex'
import { RootStateStorable } from '../state'
import { PostStateStorable } from './state'

const devtoApi = axios.create({
  baseURL: 'https://dev.to/api'
})

export const actions: ActionTree<PostStateStorable, RootStateStorable> = {
  async fetchPosts ({ commit }) {
    commit('setLoading', true)
    try {
      const response = await devtoApi.get<Post[]>('/articles?username=ardc_overflow')
      commit('setPosts', response.data)
    } catch (error) {

    } finally {
      commit('setLoading', false)
    }
  }
}
