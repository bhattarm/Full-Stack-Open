
function Phonebook(props) {


    return(
        <div>
            <form>
                filter: <input onChange={props.handleFilterChange}/>
            </form>
        </div>
    )
}

export default Phonebook

