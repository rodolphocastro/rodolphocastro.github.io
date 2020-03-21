import { RedeSocial } from '@/models/RedeSocial'
import { Tecnologia } from '@/models/Tecnologia'

export interface RootStateStorable {
  redesSociais: RedeSocial[];
  tecnologias: Tecnologia[];
}

export const state: RootStateStorable = {
  redesSociais: [],
  tecnologias: []
}
