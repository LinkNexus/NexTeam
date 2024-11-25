import React from 'react';
import Container from "@/react/controllers/Container";

interface Props {
    form: string
}
export default function (props: Props) {
    const doc: Document = new DOMParser().parseFromString(props.form, 'text/html');
    const inputs: NodeListOf<HTMLInputElement> = doc.querySelectorAll('input');
    const form = doc.getElementsByTagName('form')[0];

    console.log(doc, inputs);
    return (
        <div>
            {/*/!*<pre>{props.form}</pre>*!/*/}
            {/*{Array.from(inputs).map((el: HTMLInputElement): React.ReactElement => (*/}
            {/*    <input type={el.type} />*/}
            {/*))}*/}

            <Container child={form} />
        </div>
    );
}
