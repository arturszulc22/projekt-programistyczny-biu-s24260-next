import { User } from "@/interfaces/user";

export interface Group {
  id: string;
  user: User;
  name: string;
  shortDescription: string;
  imageURI: string;
  users: User[] | [];
}

export interface GroupCreate {
  id: string;
  name: string;
  user?: User | null
  shortDescription: string;
  imageURI: string;
  users: User[] | [];
}

export interface GroupCreateFormData {
  name: string;
  shortDescription: string;
  imageURI: string;
}
