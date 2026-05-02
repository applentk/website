export type Post = {
  id:        string;
  title:     string;
  content:   string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}