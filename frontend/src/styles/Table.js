import styled from "styled-components";

export const TableContainer = styled.table`
   width: 100%;
   padding: 20px;
   box-shadow: 0px 0px 5px #ccc;
   border-radius: 5px;
   margin: 20px auto;
   word-break: break-all;

`;
export const Thead = styled.thead``;
export const TBody = styled.tbody``;
export const Tr = styled.tr`

`;

export const Th = styled.th`
background-color: #f0f0f0;
`;

export const Td = styled.td`
      text-align: center;

`;

export const ButtonDel = styled.button`
  padding: 5px;
  background-color: purple;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
      background-color: red;
      }
`