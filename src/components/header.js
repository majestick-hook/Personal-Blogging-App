import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header({signin}) {
  const { data: session } = useSession();

  return (
    <header>
      <nav className="bg-white border-gray-200 flex justify-between items-center px-4 lg:px-6 my-0 dark:bg-purple-600 h-10">
        
        <Link href={session ? "/" : "/auth/login"}>
            <h6 className=" dark:text-white font-bold ">Personal Blogging App</h6>
        </Link>
        <div className="  flex flex-wrap justify-end items-center  max-w-screen-xl">
          <div className="flex items-center lg:order-2">
            {/* <div>
              
            </div> */}
          <div className="">
            {!session ? (
              <>
              <Link
                href= {signin ? "/auth/signup" : "/auth/login"}
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                {signin ? "SignUp" : "Login"}
              </Link>
              <Link
                href="/"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                HOME
              </Link>
              </>
              
              
            ) : (
              <>
            
              
                <button
                href="/"

                onClick={signOut}
                  
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                  Log out
                </button>
              
                <Link
                  href="/profile"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Profile
                </Link>
              </>
            )}
            </div>
            </div>
          </div>
        
      </nav>
          {/* <div>
            <h2>{signin ? "SignUp" : "Login"}</h2>
          </div> */}
    </header>
  );
}