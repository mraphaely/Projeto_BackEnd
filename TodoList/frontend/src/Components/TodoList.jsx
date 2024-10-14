import axios from 'axios';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { BsFillTrash3Fill } from "react-icons/bs";

const TodoList = () => {

    const [tarefas, setTarefas] = React.useState([]);

    React.useEffect(() => {
      const HandleGetList = async () => {
         try {
            const response = await axios.get('http://localhost:3333/api/tarefas');
            setTarefas(response.data)
         } catch {
            console.log('Não foi possível obter os dados!')
         }
      }
      HandleGetList();
    }, []);

    console.log(tarefas);

    const HandleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3333/api/tarefas/${id}`)
            setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    } catch {
        console.log('Não foi possível fazer a exclusão')
    }
};

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Tarefa</th>
                    <th>Descrição</th>
                    <th>Status</th>
                    <th>Ação</th>
                </tr>
            </thead>
            { tarefas.map((tarefa, index) => (
            <tbody key={index}>
                <tr>
                    <td>{tarefa.tarefa}</td>
                    <td>{tarefa.descricao}</td>
                    <td>{tarefa.status}</td>
                    <td>
                        <span><BsFillTrash3Fill onClick={() => HandleDelete()}/></span>
                    </td>
                </tr>
            </tbody>
            ))}
        </Table>
    )
}

export default TodoList;