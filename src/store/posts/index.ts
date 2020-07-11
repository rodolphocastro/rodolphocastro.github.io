import { Module } from 'vuex'
import { RootStateStorable } from '../state'
import { actions } from './actions'
import { mutations } from './mutations'
import { state, PostStateStorable } from './state'

export const posts: Module<PostStateStorable, RootStateStorable> = {
  namespaced: true,
  state,
  mutations,
  actions
}
