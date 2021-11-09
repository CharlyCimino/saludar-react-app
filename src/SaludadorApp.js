import React from 'react'
import VisorDeEdad from './VisorDeEdad'
import Saludador from './Saludador'

const SaludadorApp = ({nombre, anioDeNacimiento}) => {
    
    return (
            <>
                <h1>SaludadorApp</h1>
                <Saludador nombre={nombre} />
                <VisorDeEdad anioDeNacimiento={anioDeNacimiento}/>
            </>
    );
}

export default SaludadorApp;
