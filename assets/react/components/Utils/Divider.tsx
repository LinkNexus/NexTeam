import * as React from "react";

interface Props {
    children?: React.ReactNode;
}

export default function (props: Props) {
    return (
        <div
            className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600"
        >
            {props.children}
        </div>
    );
}