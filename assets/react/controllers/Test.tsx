import React from "react";

interface Props {
    form: string;
}

class ExampleComponent extends React.Component {
    constructor(props: Props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault();
        console.log('Field clicked!', event); // Add your custom logic here
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.props.form }}></div>
        );
    }
}

export default ExampleComponent