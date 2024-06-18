"use client";

import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Typography } from "@mui/joy";
import { useYupValidationResolver } from "@/resolvers/yupValidationResolver";
import { object, string } from "yup";
import { twMerge } from "tailwind-merge";

type Inputs = {
  email: string;
  password: string;
};

const validationSchema = object({
  email: string().email(),
  password: string().min(8).required(),
});

const LoginForm: FC = () => {
  const resolver = useYupValidationResolver(validationSchema);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
            name="email"
            type="email"
            autoComplete="email"
            required
            {...register("email")}
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
          <div className="text-sm">
            <a
              href="@/components/auth/LoginForm#"
              className="font-semibold text-primary-rose dark:text-dark-primary-light-blue"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            {...register("password")}
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
        <Button
          type="submit"
          variant="solid"
          className="flex w-full justify-center"
        >
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
