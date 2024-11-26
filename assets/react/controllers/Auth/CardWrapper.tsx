import React from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import AuthHeader from "@/react/controllers/Auth/AuthHeader";
import BackButton from "@/react/controllers/Auth/BackButton";

interface CardWrapperProps {
    label: string;
    title: string;
    backButtonUrl: string;
    backButtonLabel: string;
    children: React.ReactNode
}

export default function (props: CardWrapperProps) {
    return (
        <Card>
            <CardHeader>
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