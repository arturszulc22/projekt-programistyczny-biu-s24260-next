import { User } from "@/interfaces/user";
import { Comment } from "@/interfaces/comment";

export interface Post {
  id: string;
  imageURI: string;
  content: string;
  user: User;
  createdAt: string;
  attachedUsers: User[] | [];
  comments: Comment[] | [];
  likes: User[] | [];
  idGroupPost: string | null;
  idEventPost: string | null;
}
