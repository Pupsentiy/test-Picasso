export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface PostSchema {
  page: number;
  scrollTo: number;
}
