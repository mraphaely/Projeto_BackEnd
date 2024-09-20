import React from 'react'
import { Container, ContainerPrinc } from "./styles/Container"
import { Form } from "./components/Form"
import { Table } from './components/Table'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const [books, setBooks] = React.useState([]);
  const [update, setUpdate] = React.useState(null);
  
  const getBooks = async () => {
    try{
      const response = await axios.get("http://localhost:3333");
      setBooks(response.data.sort((a, b) => (a.titulo > b.titulo ? 1 : -1 )));
    } catch {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getBooks();
  }, [setBooks]);
  


  return (
    <>
    <ContainerPrinc>
    <Container>
      <Form update={update} setUpdate={setUpdate}/>
      <Table books={books} setUpdate={setUpdate}/>
    </Container>
    </ContainerPrinc>
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
