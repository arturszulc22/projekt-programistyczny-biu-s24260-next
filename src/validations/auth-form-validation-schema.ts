import { date, object, ref, string } from "yup";

export const loginFormValidationSchema = object({
  email: string().email(),
  password: string().min(8).required(),
});

export const registerFormValidationSchema = object({
  firstName: string().min(3).required(),
  lastName: string().min(3).required(),
  userName: string().min(3).required(),
  email: string().email().required(),
  password: string().min(8),
  repeatPassword: string()
    .required()
    .oneOf([ref("password"), null], "Passwords must match"),
});

export interface UserInformationFormData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  shortDescription: string;
  imageURI: string;
  dateOfBirth: string;
  town: string;
}

export const userInformationFormValidationSchema = object({
  firstName: string().min(3).required(),
  lastName: string().min(3).required(),
  userName: string().min(3).required(),
  email: string().email().required(),
  shortDescription: string().max(1000),
  imageURI: string().required(),
  town: string().min(2).required(),
  dateOfBirth: date()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .max(new Date(), "Date of birth cannot be in the future")
    .min("1969-11-13", "Date is too early")
    .required("Date of birth is required"),
});
