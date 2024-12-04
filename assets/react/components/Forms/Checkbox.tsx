import React, {forwardRef, ReactNode, RefAttributes, useId} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {CheckboxProps} from "@radix-ui/react-checkbox";
import {Label} from "@/components/ui/label";

export interface CustomCheckboxProps extends Omit<CheckboxProps & RefAttributes<HTMLButtonElement>, "ref"> {
    label: string;
}

export default forwardRef(({label, children, ...props}: CustomCheckboxProps, ref) => {
    const id = useId();

    return (
        <div className='flex items-center space-x-2'>
            <Checkbox {...props} id={id} />
            <Label
                htmlFor={id}
                // className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </Label>

            {children}
        </div>
    )
});