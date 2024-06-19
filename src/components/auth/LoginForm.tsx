"use client";

import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Snackbar, Typography } from "@mui/joy";
import { useYupValidationResolver } from "@/resolvers/yupValidationResolver";
import { twMerge } from "tailwind-merge";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useRouter } from "next/navigation";
import { LoginFormData } from "@/interfaces/auth";
import { loginFormValidationSchema } from "@/validations/auth-form-validation-schema";

const LoginForm: FC = () => {
  const { push } = useRouter();
  const { login } = useAuthStore((state) => state);

  const [state, setState] = useState({ open: false, message: "" });
  const { open, message } = state;

  const resolver = useYupValidationResolver(loginFormValidationSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await login(data);
      reset();
      push("/home");
    } catch (e: Error) {
      setState({ open: true, message: e.message });
    }
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

      {open && (
        <Snackbar
          open={open}
          variant="plain"
          color="danger"
          className="bg-red-300"
          onClick={() => setState({ ...state, open: false })}
        >
          {message}
        </Snackbar>
      )}
    </form>
  );
};

export default LoginForm;
