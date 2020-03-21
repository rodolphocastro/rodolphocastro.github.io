import { Repository } from '@/models/github/Repository'

export interface ProjetosStateStorable {
  repositories: Repository[];
}

export const state: ProjetosStateStorable = {
  repositories: []
}
