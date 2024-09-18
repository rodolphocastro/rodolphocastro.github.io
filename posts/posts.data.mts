import { createContentLoader } from 'vitepress';
import { fromContentDataToBlogPost } from '../utils.mts';

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(data) {
    return fromContentDataToBlogPost(data);
  },
});
