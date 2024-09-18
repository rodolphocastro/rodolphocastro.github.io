import { ContentData } from 'vitepress';

/**
 * a simple blog post from the posts collection.
 */
export interface BlogPost {
  title: string;
  description: string;
  author: string;
  url: string;
  excerpt: string | undefined;
  postDate: Date;
}

/**
 * converts from vitepress ContentData to BlogPost interface.
 * @param dataCollection
 * @returns
 */
export function fromContentDataToBlogPost(
  dataCollection: ContentData[],
): BlogPost[] {
  return dataCollection
    .filter(item => item.frontmatter.published !== false)
    .map(d => ({
      author: d.frontmatter.author,
      title: d.frontmatter.title,
      url: d.url,
      description: d.frontmatter.description,
      excerpt: d.excerpt,
      postDate: new Date(d.frontmatter.date),
    }));
}
