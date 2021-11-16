import React, {useState} from 'react'
import VisorDeEdad from './VisorDeEdad'
import Saludador from './Saludador'
import Formulario from './Formulario'


const SaludadorApp = () => {
    
    const [persona, setPersona] = useState({
        nombre: "Pepe",
        fechaNac: ""
    });

    return (
            <>
                <h1>SaludadorApp</h1>
                <Formulario persona={persona} setPersona={setPersona}/>
                <Saludador nombre={persona.nombre} />
                <VisorDeEdad fechaNac={persona.fechaNac}/>
            </>
    );
}

export default SaludadorApp;
