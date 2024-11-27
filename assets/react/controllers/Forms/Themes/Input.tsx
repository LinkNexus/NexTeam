import {Input} from "@/components/ui/input";
import {InputHTMLAttributes, ReactElement} from "react";
export default function (props: InputHTMLAttributes<HTMLInputElement>): ReactElement {
    return (
        <Input
            {...props}
        />
    );
}