
function Total(props) {
    
    const total = props.parts.reduce((s,p) => s+p.exercises, 0);

    return (
        <div>
            <b><p>total of {total} exercises</p></b>
        </div>
    )
}

export default Total