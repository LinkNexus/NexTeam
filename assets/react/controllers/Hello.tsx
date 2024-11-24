import React from 'react';

interface Props {
    fullName: string;
}
export default function (props: Props) {
    return <div>Hello {props.fullName}</div>;
}
