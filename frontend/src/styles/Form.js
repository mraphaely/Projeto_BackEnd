import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  backdrop-filter: blur(5px);
  color: #fff;
`
export const Label = styled.label`
  font-size: 28px;
`

export const Input = styled.input`
  max-width: 120px;
  backdrop-filter: blur(5px);
  border: 1px solid purple;
  border-radius: 5px;
  height: 40px;
  padding: 0 10px;
  background-color: rgba(0,0,0,0.3);
`
export const Button = styled.button`
  padding: 10px;
  height: 40px;
  width: 90px;
  font-size: 10px;
  background-color: purple;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
      background-color: green;
      }
`