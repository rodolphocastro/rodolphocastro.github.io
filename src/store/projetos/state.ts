import { Repository } from '@/models/github/Repository'

export interface ProjetosStateStorable {
  repositories: Repository[];
  loading: boolean;
}

export const state: ProjetosStateStorable = {
  repositories: [],
  loading: false
}
