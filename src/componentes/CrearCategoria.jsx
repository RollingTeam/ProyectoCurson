import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CrearCategoria({
  handleChange,
  formValues,
  handleSubmit,
  cleanForm,
  activarCategoria,
  cancelSubmit,
}) {
  return (
    <div className="container mt-4 mb-4">
      <div className="row m-1">
        <div className="col-md-6 mx-auto p-0">
          <h3>Datos de Categoria </h3>
          <Form className="mt-4">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre de la categoría"
                name="nombre"
                onChange={handleChange}
                value={formValues.nombre}
                required
                autoComplete="off"
              />
            </Form.Group>
          </Form>
          <div>
            {cleanForm !== undefined && (
              <Button
                variant="secondary"
                type="submit"
                size="xs"
                block
                className="float-right"
                onClick={cleanForm}
              >
                Resetear
              </Button>
            )}
            <Button
              variant="danger"
              type="submit"
              size="xs"
              block
              className="float-right"
              onClick={handleSubmit}
            >
              Guardar
            </Button>
            {cancelSubmit !== undefined && (
              <Button
                variant="secondary"
                type="submit"
                size="xs"
                block
                className="float-right"
                onClick={cancelSubmit}
              >
                Cancelar
              </Button>
            )}
            {formValues.estado === false && (
              <Button
                variant="success"
                type="submit"
                size="xs"
                block
                className="float-right"
                onClick={activarCategoria}
              >
                Activar
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
