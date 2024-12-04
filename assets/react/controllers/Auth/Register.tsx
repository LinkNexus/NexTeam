import CardWrapper from "@/react/components/Auth/CardWrapper";
import * as React from "react";
import {Form, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegistrationSchema} from '@/schemas';
import {Button, buttonVariants} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {useState} from "react";
import Divider from "@/react/components/Utils/Divider";
import {FaGoogle} from "react-icons/fa";
import {infer} from "zod";
import Tabs from "@/react/controllers/Auth/Registration/Tabs";

interface RegisterProps {
    csrfToken: string;
    backButtonUrl: string;
    verifyEmailErrors: string[];
}

export default function (props: RegisterProps) {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(RegistrationSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
            dateOfBirth: null,
            termsAndConditions: false,
            gender: null
        }
    })

    return (
        <CardWrapper
            label='Create an Account'
            backButtonUrl={props.backButtonUrl}
            backButtonLabel='Already have an account? Sign in'
            title='Sign Up'
        >
            <Form {...form}>
                <div className="space-y-4">
                    <Tabs form={form}/>
                    {/*<TermsAndConditions form={form}/>*/}
                </div>

                <form method='POST' action='/register'>
                    <Button type="submit" className="w-full"
                            disabled={loading ? true : !form.getValues("termsAndConditions")}>
                        {loading ?
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait</> :
                            "Sign Up"
                        }
                    </Button>
                </form>

                <Divider>Or with</Divider>

                <a href='#' className={buttonVariants({variant: "secondary"}) + " w-full"}>
                    <FaGoogle/>
                    Google
                </a>
            </Form>
        </CardWrapper>
    )
}