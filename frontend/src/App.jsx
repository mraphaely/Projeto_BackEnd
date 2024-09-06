import React from 'react'
import { Container } from "./styles/Container"
import { Form } from "./components/Form"
import { Table } from './components/Table'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const [users, setUsers] = React.useState([])
  
  const getUsers = async () => {
    try{
      const response = await axios.get("http://localhost:3333")
      setUsers(response.data.sort((a, b) => (a.titulo > b.titulo ? 1 : -1 )))
    } catch {
      console.log(error)
    }
  }
  React.useEffect(() => {
    getUsers();
  }, [setUsers])
  
  return (
    <>
    <Container>
      <Form/>
      <Table users={users}/>
    </Container>
      <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>
    </>
  )
}

export default App;
