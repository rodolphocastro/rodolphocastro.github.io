export interface Post {
  type_of: string;
  id: number;
  title: string;
  url: URL;
  published_at: Date;
  tag_list: string[];
  social_image: URL;
}
