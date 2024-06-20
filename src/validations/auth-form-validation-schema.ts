import { mixed, object, ref, string } from "yup";

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

export const userInformationFormValidationSchema = object({
  firstName: string().min(3).required(),
  lastName: string().min(3).required(),
  userName: string().min(3).required(),
  email: string().email().required(),
  shortDescription: string().max(1000),
  imageURI: mixed()
    .required()
    // .test("required", "You need to provide a file", (file) => {
    //   return file && file.length;
    // })
    .test("fileSize", "The file is too large", (value) => {
      if (!value.length) return true;
      return value[0].size <= 2000000;
    }),
});
