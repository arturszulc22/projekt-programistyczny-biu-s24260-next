import { FC } from "react";
import RegisterForm from "@/app/components/auth/RegisterForm";
import { Button } from "@mui/joy";
import Link from "next/link";

const Register: FC = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-primary-rose dark:text-dark-primary-light-blue font-bold text-4xl cursor-pointer">
          Instagran
        </h1>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary-rose dark:text-dark-primary-light-blue">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm />

        <p className="mt-10 text-center text-sm text-gray-500">
          Do you have an account?
          <Button
            component={Link}
            href="/login"
            variant="plain"
            className="ml-2"
          >
            Log In
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Register;
