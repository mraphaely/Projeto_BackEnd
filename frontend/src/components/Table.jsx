// rafc
import { TableContainer, TBody, Th, Thead, Tr, Td, ButtonDel } from '../styles/Table'
import axios from "axios";
import React from 'react';
import { toast } from 'react-toastify';

export const Table = ({ books }) => {

  const deleteRow = async (id) => {
    await axios.delete(`http://localhost:3333/${id}`)
      .then(({ data }) => {
        toast.success(data)
      })
      .catch(() => {
        toast.error("Não foi possível excluir o registro!")
      })
  }
  return (
    <TableContainer>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Título</Th>
          <Th>Autor(a)</Th>
          <Th>Editora</Th>
        </Tr>
      </Thead>
      <TBody >
        {books.map((item, i) => (
          <Tr key={i}>
            <Td><ButtonDel onClick={() => deleteRow(item.id)}>Del</ButtonDel></Td>
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
