import { useEffect, useState } from 'react'
import Phonebook from './components/Phonebook';
import NewPhoneForm from './components/NewPhoneForm';
import FilteredView from './components/FilteredView';
import phonebook
 from './services/phonebook';
import Notification from './components/Notification';
const App = () => {
  const [persons, setPersons] = useState([]);

  // Use State
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [status, setStatus] = useState(null);


  // All the change function handlers
  const addPerson = (event) => {
    event.preventDefault();

    let currId = 4;
    for(let i = 0; i < persons.length; i++) {
      currId = persons[i].id > currId ? persons[i].id : currId;
      if(persons[i].name === newName) {

        const updatePhonebook = confirm(`${persons[i].name} is already added to phonebook, replace the old number with new number`);
        console.log()
        if(updatePhonebook) {
          // Create a post request with new number
          let updatedNumberPerson = persons[i];
          updatedNumberPerson.number = newNumber;
          phonebook.update(persons[i].id, updatedNumberPerson)
          .then(returnedData => {
            setStatus("success");
            setErrorMessage("Sucessfully updated contact");
            setPersons(persons.map(person => person.id !== persons[i].id ? person : returnedData.data));

            setTimeout(() => {
              setStatus(null);
              setErrorMessage(null)
            }, 5000);
          })
          .catch(error => {
            setErrorMessage("Contact has been already deleted from server");
            setStatus("fail");
            setTimeout(()=> {
              setStatus(null);
              setErrorMessage(null);
            }, 5000)
            setPersons(persons.filter(person => person.id !== persons[i].id ));
          })
        }

        setNewName('');
        setNewNumber('');
        return;
      }
    }
    currId += 1;

    const newPersonObject = {
      name: newName,
      number: newNumber,
      id: currId
    }
    console.log(`${newPersonObject.id} is about to be added`);

    phonebook.create(newPersonObject)
    .then(response => {
      setStatus("success");
      setErrorMessage("Sucessfully added new contact");
      setPersons(persons.concat(newPersonObject));
      setNewName('');
      setNewNumber('');
      setTimeout(() => {
        setStatus(null);
        setErrorMessage(null)
      }, 5000);
    })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    filteredView = persons.filter(onePerson => onePerson["name"].toLowerCase().includes(filter.toLowerCase()));

  }

  // Get the list of Persons using Axios Promise and effect
  useEffect(() => {
    phonebook.getAll()
    .then(response => {
      setPersons(response.data);
    })
  }, []);

  // Delete Phone contact
  function deletePerson(id)  {
    console.log(`delete called from ${id}`)
    phonebook.delete(id).then(response => {
      setPersons(persons.filter(person => person.id !== id ));
      setStatus("success");
      setErrorMessage(`Sucessfully deleted contact`);
      setTimeout(() => {
        setStatus(null);
        setErrorMessage(null)
      }, 5000);
    })
    .catch(error => {
      setStatus("fail");
      setErrorMessage(`Contact was already removed from server`);
      setTimeout(() => {
        setStatus(null);
        setErrorMessage(null)
      }, 5000)
      setPersons(persons.filter(person => person.id !== id ));
    });
  };


  let filteredView = persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} status={status} />
      <Phonebook handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <NewPhoneForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
          newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <FilteredView filteredView={filteredView} deleteCallback={deletePerson} />
    </div>
  )
}

export default App
