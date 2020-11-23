import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const ModalVerMasCursos = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="btn btn-primary-curso" onClick={showModal}>Entrar</button>
            <Modal show={isOpen} onHide={hideModal} size="">
                <Modal.Header className="bg-ligth">
                    <Modal.Title>asd</Modal.Title>
                </Modal.Header>
                <Modal.Body>The body</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary-curso" onClick={hideModal}>Cancel</button>
                    <button className="boton">Save</button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalVerMasCursos;