export interface Blog {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface Service {
  title: string;
  path: string;
  description: string;
  items?: string[];
}
