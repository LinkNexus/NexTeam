import {Textarea} from "@/components/ui/textarea";
import {ReactElement, TextareaHTMLAttributes} from "react";

export default function (props: TextareaHTMLAttributes<HTMLTextAreaElement>): ReactElement {
    return (
        <Textarea
            {...props}
        />
    )
}