import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function WelcomeMobile() {
    return (
        <div>
            <Jumbotron>
                <h1>¡Bienvenido a Curson!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="danger">Ver Cursos</Button> <Button variant="secondary">Registrarse</Button>

                </p>
            </Jumbotron>
        </div>
    )
}
