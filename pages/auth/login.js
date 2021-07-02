import Link from "next/link";
import { useForm } from "react-hook-form";
import publicRoute from "../../components/auth/publicRoute";
import { useContext } from "react";
import { userContext } from "../_app";

function login() {
  const { setUser } = useContext(userContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ email, password }) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email, password, isLoggedIn: true })
    );
    setUser({ email, password, isLoggedIn: true });
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-indigo-700">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Next Chat
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" value="true"></input>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <section className="flex flex-row relative">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i,
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                ></input>
                {errors.email && <span>Enter a valid email</span>}
              </section>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <section className="flex flex-row relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /[A-Za-z0-9_]{8,50}/,
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                ></input>
                {errors.password && (
                  <span>
                    Password must have at least 8 characters and can't have
                    symbols
                  </span>
                )}
              </section>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              style={{
                background: "#4285f4",
                color: "white",
                border: "none",
                width: "130px",
                height: "40px",
                borderRadius: "3%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <b style={{ position: "relative" }}>Google</b>
            </button>

            <div className="text-sm">
              <Link href="/auth/register">Don&apos;t have an account yet?</Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
