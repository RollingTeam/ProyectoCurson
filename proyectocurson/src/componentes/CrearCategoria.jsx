import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function CrearCategoria() {
    return (
        <div className="container mt-4 mb-4">
            <div className="row m-1">
                <div className="col-md-6 mx-auto p-0">
                <h3>Dar de alta nueva categoría </h3>
                    <Form className="mt-4">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Ingresa el nombre de la categoría" required />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control as="select">
                                <option>Activa</option>
                                <option>Inactiva</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="danger" type="submit" size="lg" block className="float-right">
                            Enviar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
