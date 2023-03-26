export interface BlogType {
  title: string;
  writeup: string;
  likes: number;
  created_at: string;
  updated_at: string;
  comments: CommentType[];
}

export interface CommentType {
  user_id: string;
  user_image: string;
  user_name: string;
  view: string;
  updated_at: string;
}

export interface BlogArrayType {
  blogs: BlogType[]
}