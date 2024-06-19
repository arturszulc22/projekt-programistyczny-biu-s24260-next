"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Typography } from "@mui/joy";
import { object, ref, string } from "yup";
import { useYupValidationResolver } from "@/resolvers/yupValidationResolver";
import { twMerge } from "tailwind-merge";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useRouter } from "next/navigation";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const validationSchema = object({
  firstName: string().min(4).required(),
  lastName: string().min(4).required(),
  email: string().email().required(),
  password: string().min(8),
  repeatPassword: string()
    .required()
    .oneOf([ref("password"), null], "Passwords must match"),
});

const RegisterForm: FC = () => {
  const { push } = useRouter();
  const { register: registerUser } = useAuthStore((state) => state);

  const resolver = useYupValidationResolver(validationSchema);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await registerUser(data);
      reset();
      push("/home");
    } catch (e: Error) {}
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
        >
          First name
        </label>
        <div className="mt-2">
          <input
            id="first-name"
            {...register("firstName")}
            autoComplete="username"
            required
            className={twMerge(
              "block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6 focus-visible:outline-primary-rose dark:focus-visible:outline-dark-primary-light-blue",
              errors.firstName && "ring-red-600 focus-visible:outline-red-600",
            )}
          />
        </div>
        {errors.firstName && (
          <Typography color="danger" fontSize="sm">
            {errors.firstName.message}
          </Typography>
        )}
      </div>

      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
        >
          Last Name
        </label>
        <div className="mt-2">
          <input
            id="last-name"
            {...register("lastName")}
            autoComplete="username"
            required
            className={twMerge(
              "block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6 focus-visible:outline-primary-rose dark:focus-visible:outline-dark-primary-light-blue",
              errors.lastName && "ring-red-600 focus-visible:outline-red-600",
            )}
          />
        </div>
        {errors.lastName && (
          <Typography color="danger" fontSize="sm">
            {errors.lastName.message}
          </Typography>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            {...register("email")}
            type="email"
            autoComplete="email"
            required
            className={twMerge(
              "block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6 focus-visible:outline-primary-rose dark:focus-visible:outline-dark-primary-light-blue",
              errors.email && "ring-red-600 focus-visible:outline-red-600",
            )}
          />
        </div>
        {errors.email && (
          <Typography color="danger" fontSize="sm">
            {errors.email.message}
          </Typography>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            {...register("password")}
            type="password"
            autoComplete="current-password"
            required
            className={twMerge(
              "block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6 focus-visible:outline-primary-rose dark:focus-visible:outline-dark-primary-light-blue",
              errors.password && "ring-red-600 focus-visible:outline-red-600",
            )}
          />
        </div>
        {errors.password && (
          <Typography color="danger" fontSize="sm">
            {errors.password.message}
          </Typography>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="repeat-password"
            className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
          >
            Repeat Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="repeat-password"
            name="repeatPassword"
            type="password"
            autoComplete="current-password"
            required
            {...register("repeatPassword")}
            className={twMerge(
              "block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6 focus-visible:outline-primary-rose dark:focus-visible:outline-dark-primary-light-blue",
              errors.repeatPassword &&
                "ring-red-600 focus-visible:outline-red-600",
            )}
          />
        </div>
        {errors.repeatPassword && (
          <Typography color="danger" fontSize="sm">
            {errors.repeatPassword.message}
          </Typography>
        )}
      </div>

      <div>
        <Button
          type="submit"
          variant="solid"
          className="flex w-full justify-center"
        >
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
