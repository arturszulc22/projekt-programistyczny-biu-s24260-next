import { object, string } from "yup";

export interface GroupFormDataInterface {
  name: string;
  shortDescription: string;
  imageURI: string;
}

export const groupValidationSchema = object({
  name: string().min(3).required(),
  shortDescription: string().min(3).required(),
  imageURI: string().min(3).required(),
});
