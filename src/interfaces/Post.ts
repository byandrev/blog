export type Post = {
  slug?: string;
  title?: string;
  author?: string;
  date?: Date;
  content?: any;
  excerpt?: string;
  [key: string]: any;
};