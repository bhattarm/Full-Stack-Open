import Contactline from "./Contactline";

function FilteredView(props) {
    const filteredView = props.filteredView;
    
    return (
        <div>
            {filteredView.map(person => 
                <Contactline key={person.name} person={person} deleteCallback={props.deleteCallback}/>
            )}
        </div>
    )
}

export default FilteredView