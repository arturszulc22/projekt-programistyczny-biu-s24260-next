import { object, string } from "yup";

export interface CommentFormDataInterface {
  content: string;
}

export const commentValidationSchema = object({
  content: string().required(),
});
