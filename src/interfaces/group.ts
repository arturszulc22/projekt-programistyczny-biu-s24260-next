import { User } from "@/interfaces/user";

export interface Group {
  id: string;
  user: User | null;
  name: string;
  shortDescription: string;
  imageURI: string;
  users: User[] | [];
}
