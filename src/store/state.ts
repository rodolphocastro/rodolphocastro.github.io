import { RedeSocial } from '@/models/RedeSocial'

export interface RootStateStorable {
  redesSociais: RedeSocial[];
}

export const state: RootStateStorable = {
  redesSociais: []
}
