import {Label} from "@/components/ui/label";
import * as React from "react";

type LabelComponentProps = typeof Label;

interface LabelProps extends LabelComponentProps {
    label: string;
}

export default function ({ label, ...props }: LabelProps ) {
    return <Label {...props}>{label}</Label>
}