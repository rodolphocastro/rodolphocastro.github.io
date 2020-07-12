import { Post } from '@/models/devto/Post'
import { MutationTree } from 'vuex'
import { PostStateStorable } from './state'

export const mutations: MutationTree<PostStateStorable> = {
  setPosts (state, novosPosts: Post[]) {
    state.posts = novosPosts
  }
}
