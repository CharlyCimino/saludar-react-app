import React, {useState} from 'react'
import VisorDeEdad from './VisorDeEdad'
import Saludador from './Saludador'
import Formulario from './Formulario'


const SaludadorApp = ({anioDeNacimiento}) => {
    
    const [nombre, setNombre] = useState("");

    return (
            <>
                <h1>SaludadorApp</h1>
                <Formulario nombre={nombre} setNombre={setNombre}/>
                <Saludador nombre={nombre} />
                <VisorDeEdad anioDeNacimiento={anioDeNacimiento}/>
            </>
    );
}

export default SaludadorApp;
