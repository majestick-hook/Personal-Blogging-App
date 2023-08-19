import Header from "@/components/header";
import { getSession } from "next-auth/react"
import AddBlog from "./addBlog/AddBlog";

export default function SignUp () {
    return (
      <>
      <Header />
      <section class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">My-Name</h1>
          
          <div class="flex w-full justify-center items-end">
            <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label for="hero-field" class="leading-7 text-sm text-gray-600">User Name</label>
              <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label for="hero-field" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label for="hero-field" class="leading-7 text-sm text-gray-600">Password</label>
              <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Save</button>
          </div>
          
          <div class="flex">
            
   
          </div>
        </div>
      </div>
    </section>
      </>
    )
};

export async function getServerSideProps ({req}) {
    const session = await getSession({req});
    if(!session) {
      return {
        redirect: {
            destination: "/auth/login",
            permanent: false
          }
      }
    }

    return {
      props: {
          session
        }
    }
}