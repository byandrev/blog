import { User } from "./User";

export type Comment = {
  id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
};
