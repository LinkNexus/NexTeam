import {ReactElement} from "react";
import {CardDescription, CardTitle} from "@/components/ui/card";

interface AuthHeaderProps {
    label: string;
    title: string;
}

export default function ({ label, title }: AuthHeaderProps): ReactElement {
    return (
        <>
            <CardTitle className='text-center'>{title}</CardTitle>
            <CardDescription className='text-center'>{label}</CardDescription>
        </>
    );
}