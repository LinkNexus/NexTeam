import CardWrapper from "@/react/controllers/Auth/CardWrapper";

interface AuthProps {
    backButtonUrl: string;
    errorMsg: string;
    csrfToken: string;
    emailValue: string;
}

export default function ({ backButtonUrl, errorMsg, csrfToken, emailValue }: AuthProps) {
    return (
        <CardWrapper
            label="Log in to your Account"
            title="Sign In"
            backButtonUrl={backButtonUrl}
            backButtonLabel="Don't have an account? Register here"
        >
            test
        </CardWrapper>
    )
}