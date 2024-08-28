// rafc
import React from 'react'
import { TableContainer, Th, Thead, Tr} from '../styles/Table'

export const Table = () => {
  return (
    <TableContainer>
        <Thead>
            <Tr>
                <Th>Título</Th>
                <Th>Autor(a)</Th>
                <Th>Editora</Th>
            </Tr>
        </Thead>
    </TableContainer>
  )
}
