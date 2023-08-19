import Link from "next/link";
import { useRef } from "react";

export default function Form({ signin, onFormSubmit }) {
  const firstnameRef = useRef();
  const lastnameRef = useRef()
  const emailRef = useRef();
  const passwordRef = useRef();
  // const repeatPasswordRef = useRef()

  const onSubmitHandler = (e) => {
    const firstName = firstnameRef.current.value;
    const lastName = lastnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const repeatPassword = repeatPasswordRef.current.value;
    e.preventDefault();
    onFormSubmit(email, password, firstName, lastName );
  }
  return (
    <>
      <div className="flex min-h-auto flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {signin ? "Sign in" : "Signup"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmitHandler}>
            <div className={signin ? 'hidden' : 'block'}>
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    ref={firstnameRef}
                    autoComplete="firstname"

                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  lastname
                </label>
                <div className="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    type="lastname"
                    ref={lastnameRef}
                    autoComplete="lastname"

                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Repeat Password */}
            {/* <div className={signin ? 'hidden' : 'block'}>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="repeat-Password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Repeat Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="repeat-Password"
                  name="repeat-Password"
                  type="password"
                  ref={repeatPasswordRef}
                  autoComplete="current-repeat Password"
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href={signin ? "/auth/signup" : "/auth/login"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {signin
                    ? "Do not have an account? Signup"
                    : "Already have an account? Sign in"}
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {signin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}