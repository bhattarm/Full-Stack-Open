import axios from "axios";
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    console.log(`${newObject.id} is about to be called from phonebook`)
    return axios.post(baseUrl, newObject)
  }
  
  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }

  const deletePerson = (id) => {
    console.log(`${baseUrl}/${id}`);
    return axios.delete(`${baseUrl}/${id}`);
  }
  
  export default { 
    getAll: getAll, 
    create: create, 
    update: update,
    delete: deletePerson
  }
