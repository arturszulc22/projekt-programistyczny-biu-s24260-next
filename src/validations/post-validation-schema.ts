import { object, string } from "yup";

export interface PostFormDataInterface {
  content: string;
  imageURI: string;
}

export const postValidationSchema = object({
  content: string().min(3).required(),
  imageURI: string().min(3).required(),
});
