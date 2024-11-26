import {ReactElement} from "react";

interface AuthHeaderProps {
    label: string;
    title: string;
}

export default function ({ label, title }: AuthHeaderProps): ReactElement {
    return (
        <div>
            <h1>{title}</h1>
            <p>{label}</p>
        </div>
    );
}