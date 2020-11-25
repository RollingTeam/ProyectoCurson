import React , {useState , useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

export default function ModalVerMasCurso() {
    const [isOpen, setIsOpen] = useState(true);
    
    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <>
        {/* <button className="btn btn-outline-danger" onClick={showModal}>Log In</button> */}
        <Modal show={isOpen} onHide={hideModal} size="">
            <Modal.Header className="bg-light">
                <Modal.Title>TITLE MODAL</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email" />
                        <Form.Text className="text-muted">
                        example@mail.com
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline-secondary" onClick={hideModal}>Cancelar</button>
                <button className="btn btn-success">Aceptar</button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

