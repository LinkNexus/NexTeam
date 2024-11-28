import * as React from "react";
import {CardDescription, CardTitle} from "@/components/ui/card";

interface AuthHeaderProps {
    label: string;
    title: string;
}

export default function ({ label, title }: AuthHeaderProps): React.ReactElement {
    return (
        <>
            <CardTitle className='text-center text-3xl'>
                {title}
            </CardTitle>
            <CardDescription className='text-center'>{label}</CardDescription>
        </>
    );
}