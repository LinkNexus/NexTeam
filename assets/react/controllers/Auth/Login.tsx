import CardWrapper from "@/react/components/Auth/CardWrapper";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Checkbox from "@/react/components/Forms/Checkbox";
import {Button, buttonVariants} from "@/components/ui/button";
import Divider from "@/react/components/Utils/Divider";
import {FaGoogle} from "react-icons/fa";
import Alert from "@/react/components/Utils/Alert";
import * as React from "react";

interface AuthProps {
    backButtonUrl: string;
    errorMsg: string | null;
    csrfToken: string;
    lastUsername: string;
}

export default function ({ backButtonUrl, errorMsg, csrfToken, lastUsername }: AuthProps): React.ReactElement {
    return (
        <CardWrapper
            label="Log in to your Account"
            title="Sign In"
            backButtonUrl={backButtonUrl}
            backButtonLabel="Don't have an account? Register here"
        >

            {errorMsg && <Alert type='error' className='mb-5'>{errorMsg}</Alert>}

            <form className='flex flex-col space-y-5' method='POST' action=''>
                <div className='flex flex-col space-y-2'>
                    <Label htmlFor='username'>Email Address</Label>
                    <Input required autoFocus placeholder='user@example.com' autoComplete='email' type='email'
                           name='_username' id='username' value={lastUsername}/>
                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-center justify-between'>
                        <Label className='h-fit' htmlFor='password'>Password</Label>
                        <a className='h-fit text-sm hover:underline underline-offset-4' href='/'>
                            Forgot password?
                        </a>
                    </div>
                    <Input className='placeholder:tracking-wider' placeholder='********' autoComplete='current-password'
                           type='password' name='_password' id='password'/>
                </div>

                <Checkbox
                    label='Remember Me'
                    children={null}
                />
                <input type='hidden' name='_csrf_token' value={csrfToken}/>

                <Button className='w-full' type='submit'>
                    Sign In
                </Button>
            </form>

            <Divider>Or sign in with</Divider>

            <a href='#' className={buttonVariants({variant: "secondary"}) + " w-full"}>
                <FaGoogle/>
                <span>Google</span>
            </a>
        </CardWrapper>
    )
}