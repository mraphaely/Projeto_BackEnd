import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { Button, FormContainer, Input, Label } from '../styles/Form';
import axios from "axios";
import { useEffect } from 'react';

export const Form = ({ update, setUpdate }) => {

  const ref = useRef();

  useEffect(() => {
    if(update){
      const book = ref.current;

      book.titulo.value = update.titulo;
      book.autor.value = update.autor;
      book.editora.value = update.editora;
    }
  }, [update])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const book = ref.current

    if (!book.titulo.value || !book.autor.value || !book.editora.value) {
      // return toast("Preencha todos os campos do formulário.")
      return toast.warn("Preencha todos os campos do formulário.")
    }

    if (update) {

      await axios.put(`http://localhost:3333/${update.id}`, {
        titulo: book.titulo.value,
        autor: book.autor.value,
        editora: book.editora.value
      })
        .then(() => toast.success("Livro atualizado com sucesso!"))
    } else {
      await axios.post("http://localhost:3333", {
        titulo: book.titulo.value,
        autor: book.autor.value,
        editora: book.editora.value
      })
        .then(() => toast.success("Cadastrado com sucesso."))
        .catch(() => toast.error("Erro ao cadastrar."))
    };

    book.titulo.value = "";
    book.autor.value = "";
    book.editora.value = "";

    setUpdate(null);
}



  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <Label>Titulo</Label>
      <Input name='titulo' />
      <Label>Autor (a)</Label>
      <Input name='autor' />
      <Label>Editora</Label>
      <Input name='editora' />
      <Button type='submit'>ADICIONAR</Button>
    </FormContainer>
  )
};

export default Form;
