export interface Post {
  title: string;
  description: string;
  authors: string[];
  pubDate: string;
  modDate: string;
  socialImage: Record<string, any>;
  lang: string;
  tags: string[];
  section: string;
}
