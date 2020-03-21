import { Module } from 'vuex'
import { RootStateStorable } from '../state'
import { actions } from './actions'
import { mutations } from './mutations'
import { ProjetosStateStorable, state } from './state'

export const projetos: Module<ProjetosStateStorable, RootStateStorable> = {
  namespaced: true,
  state,
  mutations,
  actions
}
