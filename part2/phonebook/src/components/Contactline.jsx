

function Contactline(props) {
    const person = props.person;

    function handleButtonClikc(id) {
        props.deleteCallback(id)
    }

    return (
        <div>
            <p>{person.name} {person.number} <button onClick={() => handleButtonClikc(person.id)}>delete</button> </p>
        </div>
    )
}

export default Contactline;