import { Post } from '@/models/devto/Post'

export interface PostStateStorable {
  posts: Post[];
}

export const state: PostStateStorable = {
  posts: []
}
