import {Input} from "@/components/ui/input";

interface InputProps {
    className?: string;
    type?: 'checkbox' | 'radio' | 'email' | 'text';
}

export default function ({ className, type }: InputProps) {
    return (
        <Input type={type} className={className}></Input>
    );
}