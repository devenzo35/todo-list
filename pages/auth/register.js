import { useForm } from "react-hook-form";
import axios from "axios";

export default function register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const passwordValue = watch("password");

  const onSubmit = async ({ name, email, password }) => {
    const res = await axios.post("http://localhost:3001/users", {
      name,
      email,
      password,
    });
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-7 px-4 sm:px-6 lg:px-4 bg-indigo-700">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-lg">
        <div>
          {/* <Image
            className="mx-auto h-36 w-auto"
            src="./assets/undraw_Work_chat_re_qes4.svg"
            alt="Workflow"
            layout="fill"
          ></Image> */}
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Start be connect with your friends
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-3 space-y-6"
          action="#"
          method="POST"
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="name"
                ></input>
                {errors.name && (
                  <span>Name must have at least 3 characters</span>
                )}
              </section>
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <section className="flex flex-col relative">
                <input
                  id="email-address"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i,
                  })}
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                ></input>

                {errors.email && <span>Enter a valid email</span>}
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
                  {...register("password", {
                    required: true,
                    pattern: /[A-Za-z0-9_]{8,50}/,
                  })}
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                ></input>
                {errors.password && (
                  <span>
                    {" "}
                    Password must have at least 8 characters and can't have
                    symbol
                  </span>
                )}
              </section>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Confirm your password
              </label>

              <section className="flex flex-col relative">
                <input
                  id="password2"
                  name="password2"
                  {...register("password2", {
                    required: true,
                    pattern: /[A-Za-z0-9_]{8,50}/,
                    validate: (value) => value === passwordValue,
                  })}
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm your password"
                ></input>
                {errors.password2 && <span>Passwords must be the same</span>}
              </section>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
