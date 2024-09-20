// rafc
import { TableContainer, TBody, Th, Thead, Tr, Td, Button } from '../styles/Table'
import axios from "axios";
import React, { useRef } from 'react';
import { toast } from 'react-toastify';

export const Table = ({ books, setUpdate }) => {


  const deleteRow = async (id) => {
    await axios.delete(`http://localhost:3333/${id}`)
      .then(({ data }) => {
        toast.success(data)
      })
      .catch(() => {
        toast.error("Não foi possível excluir o registro!")
      })
  }
  const handleUpdate = (item) => {
    setUpdate(item)
  }

  return (
    <TableContainer>
      <Thead>
        <Tr>
          <Th></Th>
          <Th></Th>
          <Th>Título</Th>
          <Th>Autor(a)</Th>
          <Th>Editora</Th>
        </Tr>
      </Thead>
      <TBody >
        {books.map((item, i) => (
          <Tr key={i}>
            <Td><Button onClick={() => deleteRow(item.id)}>DELETE</Button></Td>
            <Td><Button onClick={() => handleUpdate(item)}>UPDATE</Button></Td>
            <Td>{item.titulo}</Td>
            <Td>{item.autor}</Td>
            <Td>{item.editora}</Td>
          </Tr>
        ))
        }
      </TBody>
    </TableContainer>


  )
}
