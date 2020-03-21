import { Repository } from '@/models/github/Repository'
import { MutationTree } from 'vuex'
import { ProjetosStateStorable } from './state'

export const mutations: MutationTree<ProjetosStateStorable> = {
  setRepositories (state, novosRepositories: Repository[]) {
    state.repositories = novosRepositories
  }
}
