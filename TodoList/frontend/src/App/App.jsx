import React from 'react'
import { Container } from 'react-bootstrap';
import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';
import axios from 'axios';

const App = () => {
    const [tarefas, setTarefas] = React.useState([]);

    React.useEffect(() => {
      const HandleGetList = async () => {
         try {
            const response = await axios.get('http://localhost:3333/api/tarefas');
            setTarefas(response.data.tarefas)
         } catch {
            console.log('Não foi possível obter os dados!')
         }
      }
      HandleGetList();
    }, []);

    return (
        <>
            <Container>
                <TodoForm />
                <TodoList tarefas={tarefas} setTarefas={setTarefas} />
            </Container>
        </>
    )
}

export default App;