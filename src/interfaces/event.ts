import { User } from "@/interfaces/user";

export interface Event {
  id: string;
  user: User;
  name: string;
  shortDescription: string;
  description: string;
  dateTime: string;
  imageURI: string;
  users: User[] | [];
}
