import * as React from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import CardWrapper from "@/react/components/Auth/CardWrapper";
import Alert from "@/react/components/Utils/Alert";
import {useForm} from "react-hook-form";
import z from "zod";
import {ResetPasswordSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import ReactPasswordChecklist from "react-password-checklist";
import {Loader2} from "lucide-react";

interface ResetProps {
    backButtonUrl: string;
    csrfToken: string;
}
export default function ({ backButtonUrl, csrfToken }: ResetProps): React.ReactElement {
    interface ResponseProps {
        errors: string[] | undefined;
        token: string | undefined;
        id: string | undefined;
    }

    const [response, setResponse] = useState<ResponseProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const form = useForm<z.infer<typeof ResetPasswordSchema>>({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            password: '',
            confirmPassword: '',
            csrfToken: csrfToken
        },
    });

    const password: string = form.getValues("password");
    const confirmPassword: string = form.getValues("confirmPassword");

    const onSubmit = (data: z.infer<typeof ResetPasswordSchema>) => {
        console.log(data);
        if (data.password !== data.confirmPassword) {
            form.setError("confirmPassword", {message: "Passwords do not match"});
            return;
        }

        setLoading(true);
        fetch('/reset-password/reset', {
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

    if (response && !response.errors)
        location.href = '/login';

    return (
        <CardWrapper
            label='Change your password'
            title='Choose a new Password'
            backButtonUrl={backButtonUrl}
            backButtonLabel='Login to your account'
        >
            {
                response?.errors?.map((error: string): React.ReactElement => (
                    <Alert type="error" className="mb-3">
                        { error }
                    </Alert>
                ))
            }

            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} action='/reset-password/reset' name='change_password_form' method='POST' className='flex flex-col space-y-5'>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input  {...field} type="password" placeholder="******" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input  {...field} type="password" placeholder="******" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <ReactPasswordChecklist
                        style={{
                            marginTop: "1rem"
                        }}
                        rules={["minLength", "specialChar", "number", "capital", "match"]}
                        value={password}
                        minLength={6}
                        iconSize={10}
                        valueAgain={confirmPassword}
                        messages={{
                            minLength: "Password must be at least 6 characters",
                            specialChar: "Password must contain at least one special character",
                            number: "Password must contain at least one digit",
                            capital: "Password must contain at least one uppercase letter",
                            match: "Passwords must match"
                        }} />

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
                            disabled={loading}>
                        {loading ?
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait</> :
                            "Submit"
                        }
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}