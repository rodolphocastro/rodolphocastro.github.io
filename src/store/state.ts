import { RedeSocial } from '@/models/RedeSocial'

export interface RootState {
  redesSociais: RedeSocial[];
}

export const state: RootState = {
  redesSociais: []
}
