import {Textarea} from "@/components/ui/textarea";
import * as React from "react";

export default function (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>): React.ReactElement {
    return (
        <Textarea
            {...props}
        />
    )
}