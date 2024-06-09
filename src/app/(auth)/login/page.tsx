import { FC } from "react";
import LoginForm from "@/app/components/auth/LoginForm";
import { Button } from "@mui/joy";
import Link from "next/link";

const Login: FC = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-primary-rose dark:text-dark-primary-light-blue font-bold text-4xl cursor-pointer">
          Instagran
        </h1>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary-rose dark:text-dark-primary-light-blue">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Button
            component={Link}
            href="/register"
            variant="plain"
            className="ml-2"
          >
            Register now!
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Login;
