import styled from "styled-components";

export const TableContainer = styled.table`
   width: 100%;
   padding: 20px;
   box-shadow: 0px 0px 5px #ccc;
   border-radius: 5px;
   margin: 20px auto;
   word-break: break-all;
   backdrop-filter: blur(5px);
   color: #fff;

`;
export const Thead = styled.thead``;
export const TBody = styled.tbody``;
export const Tr = styled.tr`

`;

export const Th = styled.th`
background-color: purple;
backdrop-filter: blur(5px);
color: #fff;
`;

export const Td = styled.td`
      text-align: center;
      padding: 10px;

`;

export const Button = styled.button`
  padding: 8px;
  height: auto;
  width: 70px;
  font-size: 10px;
  background-color: purple;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
      background-color: red;
      }
`