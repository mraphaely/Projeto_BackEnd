import React from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const TodoForm = () => {

  const [tarefa, setTarefa] = React.useState(''); 
  const [descricao, setDescricao] = React.useState(null); 
  const [message, setMessage] = React.useState(null); 
  const [loading, setLoading] = React.useState(''); 
   
  const HandlePost = async (event) => {

    event.preventDefault();
    setLoading("Carregando...");

    try {
        await axios.post("http://localhost:3333/api/tarefas", {
            tarefa,
            descricao
        })
        setMessage("Tarefa criada com sucesso!");
        setLoading("");
        
    } catch (error) {
        setMessage("Não foi possível salvar a sua tarefa!");
    }
  };

  return (
    <Form onSubmit={HandlePost}>
    <Form.Group className="mb-3" controlId="">
      <Form.Label>Título:</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="Digite o título da sua tarefa" 
      value={tarefa}
      onChange={(event) => setTarefa(event.target.value)}
      required/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
      <Form.Label>Descrição:</Form.Label>
      <Form.Control 
      type="textarea" 
      placeholder="Digite a descrição da seua tarefa"
      value={descricao}
      onChange={(event) => setDescricao(event.target.value)}
       />
    </Form.Group>

    <Button variant="primary" type="submit">
      Postar
    </Button>
    {message ? <p>{message}</p> : <p>{loading}</p>}
  </Form>
  )
};

export default TodoForm;