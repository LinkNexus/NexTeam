interface Props {
    child: Node;
}

export default function(props: Props) {
    return (
        <template ref={ ref => ref?.appendChild(props.child)}></template>
    );
}