import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const EditForm = ({show, handleClose, tarefa}) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const ref = React.useRef();

  React.useEffect(() => {
    if(tarefa){
      const form = ref;
      form.tarefa.value = tarefa.tarefa
      form.descricao.value = tarefa.descricao
    }
  }, [tarefa]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = ref;

    handleEdit({
      ...tarefa,
      tarefa: form.tarefa.value,
      descricao: form.descricao.value
    });

    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="tarefaEdit">
              <Form.Label>Tarefa:</Form.Label>
              <Form.Control/>
            </Form.Group>
            <Form.Group controlId="descricaoEdit">
              <Form.Label>Descrição:</Form.Label>
              <Form.Control/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditForm;