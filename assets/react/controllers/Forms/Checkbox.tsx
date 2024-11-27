import {ReactNode, RefAttributes, useId} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {CheckboxProps} from "@radix-ui/react-checkbox";

interface Props extends Omit<CheckboxProps & RefAttributes<HTMLButtonElement>, "ref"> {
    label: string;
    children: ReactNode | null;
}

export default function ({ label, children, ...props}: Props) {
    const id = useId();

    return (
        <div className='flex items-center space-x-2'>
            <Checkbox {...props} id={id} />
            <label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>

            {children}
        </div>
    )
}