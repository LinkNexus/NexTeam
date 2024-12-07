import * as React from "react";
import {Button} from "@/components/ui/button";
import {ButtonProps} from "react-day-picker";

interface SubmitButtonProps extends ButtonProps {
    label: string;
}

export default function ({ label, ...props }: SubmitButtonProps) {
    return <Button {...props} >{label}</Button>
}