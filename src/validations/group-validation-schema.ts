import { object, string } from "yup";

export const createGroupValidationSchema = object({
  name: string().min(3).required(),
  shortDescription: string().min(3).required(),
  imageURI: string().min(3).required(),
});