import React from 'react'
import { Container } from "./styles/Container"
import { Form } from "./components/Form"
import { Table } from './components/Table'

const App = () => {
  return (
    <Container>
      <Form/>
      <Table/>
    </Container>
  )
}

export default App;
