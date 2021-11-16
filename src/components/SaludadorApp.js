import React from 'react'
import VisorDeEdad from './VisorDeEdad'
import Saludador from './Saludador'
import Formulario from './Formulario'

const SaludadorApp = ({nombre, anioDeNacimiento}) => {
    
    return (
            <>
                <h1>SaludadorApp</h1>
                <Formulario />
                <Saludador nombre={nombre} />
                <VisorDeEdad anioDeNacimiento={anioDeNacimiento}/>
            </>
    );
}

export default SaludadorApp;
