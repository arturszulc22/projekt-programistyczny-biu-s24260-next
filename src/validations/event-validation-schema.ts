import { date, object, string } from "yup";

export interface EventFormDataInterface {
  name: string;
  shortDescription: string;
  description: string;
  dateTime: string;
  imageURI: string;
}

export const eventValidationSchema = object({
  name: string().min(3).required(),
  shortDescription: string().min(3).required(),
  description: string().min(3).required(),
  dateTime: date()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .min(new Date(), "Event date time cannot be in past")
    .required("Event date time is required"),
  imageURI: string().min(3).required(),
});
