import * as React from "react";
import CardWrapper from "@/react/components/Auth/CardWrapper";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Alert from "@/react/components/Utils/Alert";

interface RequestProps {
    backButtonUrl: string;
    csrfToken: string;
    errors: string[];
    resetMessage: string | null;
    resetPasswordErrors: string[];
}
export default function ({ backButtonUrl, csrfToken, errors, resetMessage, resetPasswordErrors }: RequestProps): React.ReactElement {
    return (
        <CardWrapper
            label='Reset your password'
            title='Reset Password'
            backButtonUrl={backButtonUrl}
            backButtonLabel='Login to your account'
        >
            {errors.map((message: string, id: number): React.ReactElement => (
                <Alert key={id} type='error' className='mb-5'>{message}</Alert>
            ))}

            {resetPasswordErrors.map((message: string, id: number): React.ReactElement => (
                <Alert key={id} type='error' className='mb-5'>{message}</Alert>
            ))}

            {resetMessage && (
                <Alert type='info' className='mb-5'>
                    <div dangerouslySetInnerHTML={{__html: resetMessage}}></div>
                </Alert>
            )}

            <form action='/reset-password' name='reset_password_request_form' method='POST' className='flex flex-col space-y-5'>
                <div className='flex flex-col space-y-2'>
                    <Label htmlFor='reset_password_request_email'>Email Address</Label>
                    <Input required autoFocus placeholder='user@example.com' autoComplete='email' type='email'
                           name='reset_password_request_form[email]' id='reset_password_request_email' />
                    <p className='text-sm text-muted-foreground'>
                        Enter your email address, and we will send you a
                        link to reset your password.
                    </p>
                </div>

                <Input type='hidden' name='reset_password_request_form[_token]' value={csrfToken} />

                <Button className='w-full' type='submit'>
                    Submit
                </Button>
            </form>
        </CardWrapper>
    )
}