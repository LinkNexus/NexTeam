import * as React from "react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle, AlertTriangle, Terminal} from "lucide-react";

interface AlertProps extends React.HTMLProps<HTMLDivElement> {
    type: "info" | "error";
    message?: string;
}

type AlertHeaderProps = {
    type: "info" | "error";
}

enum AlertType {
    error = 'destructive',
    info = 'default'
}

export default function ({type, message, children, ...props}: AlertProps): React.ReactElement {
    const variant: AlertType = AlertType[type];
    return (
        <Alert variant={variant} {...props}>
            <AlertHeader type={type} />
            <AlertDescription>
                {message ?? children}
            </AlertDescription>
        </Alert>
    )
}

function AlertHeader({ type }: AlertProps): React.ReactElement {
    if (type === "info") {
        return (
            <>
                <Terminal className='h-4 w-4'/>
                <AlertTitle>Heads Up!</AlertTitle>
            </>
        )
    }

    return (
        <>
            <AlertCircle className="h-5 w-5 mr-2"/>
            <AlertTitle>Error!</AlertTitle>
        </>
    );
}