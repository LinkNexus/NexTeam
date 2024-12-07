import {Input} from "@/components/ui/input";
import * as React from "react";
export default function (props: React.InputHTMLAttributes<HTMLInputElement>): React.ReactElement {
    return (
        <Input
            {...props}
        />
    );
}