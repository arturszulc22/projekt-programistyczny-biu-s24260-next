import { User } from "@/interfaces/user";

export interface Group {
  id: string;
  user: User;
  name: string;
  shortDescription: string;
  imageURI: string;
  isPrivate: boolean;
  users: User[];
}
