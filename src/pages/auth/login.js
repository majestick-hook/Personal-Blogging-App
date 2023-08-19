import Form from "@/components/auth/form";
import Header from "@/components/header";
import { getSession, signIn } from "next-auth/react";

export default function SignIn () {
    const onSubmit = async (email, password,firstName,lastName) => {
    const data = await signIn('credentials', {redirect: {destination: "/dashboard", permanent: false}, email, password,firstName,lastName});
        console.log(data);
    };
    return (
      <>
      <Header signin={true} />
    <Form signin={true} onFormSubmit={onSubmit} />
      </>
    )
};
export async function getServerSideProps ({req}) {
    const session = await getSession({req});
    if(session) {
      return {
        redirect: {
            destination: "/dashboard",
            permanent: false
          }
      }
    }
  
    return {
      props: {}
    }
  }