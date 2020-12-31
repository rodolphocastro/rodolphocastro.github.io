import { Post } from '@/models/devto/Post'
import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
import { ActionTree } from 'vuex'
import { RootStateStorable } from '../state'
import { PostStateStorable } from './state'

const devtoApi = axios.create({
  baseURL: 'https://dev.to/api',
  adapter: cacheAdapterEnhancer(axios.defaults.adapter as any)
})

export const actions: ActionTree<PostStateStorable, RootStateStorable> = {
  async fetchPosts ({ commit }) {
    commit('setLoading', true)
    try {
      const response = await devtoApi.get<Post[]>('/articles?username=ardc_overflow')
      const staggered: Post[] = []
      for (let pIndex = 0; pIndex < response.data.length; pIndex++) {
        const post = response.data[pIndex]
        const delay = pIndex * 750
        setTimeout(() => {
          staggered.push(post)
          commit('setPosts', staggered)
        }, delay)
      }
    } catch (error) {

    } finally {
      commit('setLoading', false)
    }
  }
}
