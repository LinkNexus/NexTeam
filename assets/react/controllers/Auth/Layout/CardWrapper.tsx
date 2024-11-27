import React, {ReactElement} from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import AuthHeader from "@/react/controllers/Auth/Layout/AuthHeader";
import BackButton from "@/react/controllers/Auth/Layout/BackButton";

interface CardWrapperProps {
    label: string;
    title: string;
    backButtonUrl: string;
    backButtonLabel: string;
    children: React.ReactNode
}

export default function (props: CardWrapperProps): ReactElement {
    return (
        <Card className='w-[95%] md:w-[60%] lg:w-[40%] shadow-lg'>
            <CardHeader className='mb-5'>
                <AuthHeader label={props.label} title={props.title} />
            </CardHeader>
            <CardContent>{props.children}</CardContent>
            <CardFooter>
                <BackButton
                    href={props.backButtonUrl}
                    label={props.backButtonLabel}
                />
            </CardFooter>
        </Card>
    );
}