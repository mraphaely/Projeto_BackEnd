import React from 'react'
import { Container } from "./styles/Container"
import { Form } from "./components/Form"
import { Table } from './components/Table'
import axios from 'axios'

const App = () => {

  const [users, setUsers] = React.useState([])
  
  const getUsers = async () => {
    try{
      const response = await axios.get("http://localhost:3001")
      setUsers(response.data.sort((a, b) => (a.titulo > b.titulo ? 1 : -1 )))
    } catch {
      console.log(error)
    }
  }
  React.useEffect(() => {
    getUsers();
  }, [setUsers])
  
  return (
    <Container>
      <Form/>
      <Table users={users}/>
    </Container>
  )
}

export default App;
