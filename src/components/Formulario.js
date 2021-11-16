import React from 'react'

const Formulario = ({persona, setPersona}) => {

    const handleChange = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto
        console.log(event);
        setPersona( perActual => {
            return {
                ...perActual,
                [event.target.name]: event.target.value
            }
        });
    }

    return (
        <form>
            <label>
                Nombre: 
                <input type="text" 
                       name="nombre"
                       value={persona.nombre}
                       onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Fecha de nacimiento: 
                <input type="date" 
                       name="fechaNac"
                       value={persona.fechaNac}
                       onChange={handleChange}/>
            </label>
            
        </form>
    )
}

export default Formulario
