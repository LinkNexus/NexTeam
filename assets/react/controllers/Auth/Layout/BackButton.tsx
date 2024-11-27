import {Button} from "@/components/ui/button";
import {ReactElement} from "react";

interface BackButtonProps {
    label: string;
    href: string;
}

export default function ({ label, href }: BackButtonProps): ReactElement {
    return (
        <Button className='font-nornmal w-full' size='sm' variant='link' asChild>
            <a href={href}>
                {label}
            </a>
        </Button>
    );
}