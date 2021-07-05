import Link from "next/link";
import { useForm } from "react-hook-form";
import publicRoute from "../../components/auth/publicRoute";
import { useContext } from "react";
import { userContext } from "../_app";
import { RiErrorWarningFill } from "react-icons/ri";

function login() {
  const { setUser } = useContext(userContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ name, email, password }) => {
    const user = { name, email, password, isLoggedIn: true };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.removeItem("visited");
    setUser(user);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 border shadow-md bg-white rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Todo List App
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true"></input>
          <div className="rounded-md -space-y-px">
            <section className="flex flex-col relative">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                {...register("name", {
                  required: true,
                  pattern: /[A-Za-z0-9_]{3,15}/,
                })}
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="name"
                autoComplete="off"
              ></input>
              {errors.name && (
                <div className="flex items-center my-2">
                  <RiErrorWarningFill className="text-red-400 text-md mr-1" />
                  <span className="text-sm text-center text-gray-500 font-bold">
                    Name must have at least 3 characters
                  </span>
                </div>
              )}
            </section>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <section className="flex flex-col relative">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="off"
                  {...register("email", {
                    required: true,
                    pattern:
                      /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i,
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                ></input>
                {errors.email && (
                  <div className="flex items-center my-2">
                    <RiErrorWarningFill className="text-red-400 text-md mr-1" />
                    <span className="text-sm text-center text-gray-500 font-bold">
                      Enter a valid email
                    </span>
                  </div>
                )}
              </section>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <section className="flex flex-col relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /[A-Za-z0-9_]{8,50}/,
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  autoComplete="off"
                ></input>
                {errors.password && (
                  <div className="flex my-2">
                    <RiErrorWarningFill className="text-red-400 text-lg mr-1" />
                    <span className="text-sm text-gray-500 font-bold">
                      Password must have at least 8 characters and can't have
                      symbols
                    </span>
                  </div>
                )}
              </section>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href="/auth/register">Don&apos;t have an account yet?</Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default publicRoute(login, { pathAfterFailure: "/" });
