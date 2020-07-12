export interface Post {
  type_of: string;
  id: number;
  title: string;
  description: string;
  url: URL;
  readable_publish_date: string;
  published_at: Date;
  tag_list: string[];
  social_image: URL;
}
