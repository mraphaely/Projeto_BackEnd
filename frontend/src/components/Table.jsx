// rafc
import React from 'react'
import { TableContainer, TBody, Th, Thead, Tr, Td} from '../styles/Table'

export const Table = ({users}) => {
  return (
    <TableContainer>
        <Thead>
            <Tr>
                <Th>Título</Th>
                <Th>Autor(a)</Th>
                <Th>Editora</Th>
            </Tr>
        </Thead>
        <TBody>
          {
            users.map((item, i) => (
              <Tr key={i}>
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
