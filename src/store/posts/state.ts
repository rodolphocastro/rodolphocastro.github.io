import { Post } from '@/models/devto/Post'

export interface PostStateStorable {
  posts: Post[];
  loading: boolean;
}

export const state: PostStateStorable = {
  posts: [],
  loading: false
}
