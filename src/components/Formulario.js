import React from 'react'

const Formulario = ({persona, setPersona}) => {

    const handleChangeNombre = (event) => {
        event.preventDefault(); // Evita que se recargue la página al hacer 'submit'
        setPersona( perActual => {
            return {
                nombre: event.target.value,
                fechaNac: perActual.fechaNac
            }
        });
        /*
            Cuando dependemos del estado anterior, podemos mandar un callback
            setPersona( estadoAnterior => {...} )
        */
    }

    const handleChangeFechaNac = (event) => {
        event.preventDefault(); // Evita que se recargue la página al hacer 'submit'
        setPersona( perActual => {
            return {
                nombre: perActual.nombre,
                fechaNac: event.target.value
            }
        });
    }

    return (
        <form>
            <label>
                Nombre: 
                <input type="text" value={persona.nombre} onChange={handleChangeNombre}/>
            </label>
            <br/>
            <label>
                Fecha de nacimiento: 
                <input type="date" value={persona.fechaNac} onChange={handleChangeFechaNac}/>
            </label>
            
        </form>
    )
}

export default Formulario
