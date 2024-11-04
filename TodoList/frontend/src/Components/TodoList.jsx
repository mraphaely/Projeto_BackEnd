import axios from 'axios';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { BsFillTrash3Fill } from "react-icons/bs";
import EditForm from './editForm';

const TodoList = ({ tarefas, setTarefas }) => {

    const [show, setShow] = React.useState(false);
    const [onEdit, setOnEdit] = React.useState(null);

    const handleEdit = (tarefa) => {
        setOnEdit(tarefa);
        setShow(true);
    }

    const handleSubmitEdit = async (editedTarefa) => {
        try {
            await axios.put(`http://localhost:3333/api/tarefas/${editedTarefa.id}`, editedTarefa)
            setTarefas((prevTarefas) => prevTarefas.map(
                (tarefa) => tarefa.id === editedTarefa.id ? editedTarefa : tarefa));
            
            setShow(false)
        } catch (error) {
            console.error("Erro ao atualizar a tarefa", error)
        }
    }

    const HandleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3333/api/tarefas/${id}`)
            setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    } catch {
        console.log('Não foi possível fazer a exclusão')
    }
};

    return (
        <>
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
                        <button><BsFillTrash3Fill onClick={() => HandleDelete(tarefa.id)}/></button>
                        <button onClick={() => handleEdit(tarefa)}>Editar</button>
                    </td>
                </tr>
            </tbody>
            ))}
        </Table>
        <EditForm
        show={show}
        handleClose={() => setShow(false)}
        tarefa={onEdit}/>
        </>
    )
}

export default TodoList;