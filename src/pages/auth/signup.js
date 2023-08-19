import Form from "@/components/auth/form";
import Header from "@/components/header";

export default function SignUp() {
    const onSubmit = async (email, password, firstName, lastName) => {
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({email, password, firstName, lastName}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                alert("Sign up Succesful");
                console.log(email);
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
        <Header signin={false}/>
    <Form signin={false} onFormSubmit={onSubmit} />
    </>
    )
};
