export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface PostSchema {
  post: Post[];
  page: number;
}
