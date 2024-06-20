import {object, ref, string} from "yup";

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