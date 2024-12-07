import CardWrapper from "@/react/components/Auth/CardWrapper";
import * as React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegistrationSchema} from '@/schemas';
import {Button, buttonVariants} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {useState} from "react";
import Divider from "@/react/components/Utils/Divider";
import {FaGoogle} from "react-icons/fa";
import Tabs from "@/react/components/Auth/Register/Tabs";
import TermsAndConditions from "@/react/components/Auth/Register/TermsAndConditions";
import z from 'zod';
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Alert from "@/react/components/Utils/Alert";
import {GitHubLogoIcon} from "@radix-ui/react-icons";

interface RegisterProps {
    csrfToken: string;
    backButtonUrl: string;
    verifyEmailErrors: string[];
}

export default function (props: RegisterProps) {
    interface ResponseProps {
        errors: string[] | undefined;
        token: string | undefined;
        id: string | undefined;
    }

    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<ResponseProps | null>(null);

    const form = useForm<z.infer<typeof RegistrationSchema>>({
        resolver: zodResolver(RegistrationSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
            termsAndConditions: false,
            csrfToken: props.csrfToken,
        }
    })

    const onSubmit = (data: z.infer<typeof RegistrationSchema>) => {
        console.log(data);

        if (data.password !== data.confirmPassword) {
            form.setError("confirmPassword", {message: "Passwords do not match"});
            return;
        }

        setLoading(true);
        fetch('/create-account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setResponse(result);
            })
            .catch(e => console.error(e.toString()))
        ;
    };

    if (response?.token && response?.id) {
        location.href = `/register/authenticate/${response.id}/${response.token}`;
    }

    return (
        <CardWrapper
            label='Create an Account'
            backButtonUrl={props.backButtonUrl}
            backButtonLabel='Already have an account? Sign in'
            title='Sign Up'
        >
            {
                response?.errors?.map((error: string): React.ReactElement => (
                    <Alert type="error" className="mb-3">
                        { error }
                    </Alert>
                ))
            }

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} method='POST' className='space-y-6' action='/register'>
                    <div className="space-y-4">
                        <Tabs form={form}/>
                        <TermsAndConditions form={form}/>
                    </div>

                    <FormField
                        control={form.control}
                        name='csrfToken'
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type='hidden' />
                                </FormControl>
                            </FormItem>
                        )} />

                    <Button type="submit" className="w-full"
                            disabled={loading ? true : !form.getValues("termsAndConditions")}>
                        {loading ?
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait</> :
                            "Sign Up"
                        }
                    </Button>
                </form>

                <Divider>Or sign up with</Divider>

                <div className='flex space-x-2'>
                    <a href='#' className={buttonVariants({variant: "secondary"}) + " w-full"}>
                        <FaGoogle/>
                        <span>Google</span>
                    </a>
                    <a href='#' className={buttonVariants({variant: "secondary"}) + " w-full"}>
                        <GitHubLogoIcon/>
                        <span>Github</span>
                    </a>
                </div>
            </Form>
        </CardWrapper>
    )
}