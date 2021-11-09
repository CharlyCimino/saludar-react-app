import React from 'react'
import PropTypes from 'prop-types';

const Saludador = ({nombre = "extraño", anioDeNacimiento}) => {
    const anioActual = new Date().getFullYear();
    return (
            <>
                <h1>SaludadorApp</h1>
                <p>Hola {nombre}!</p>
                {   
                    anioDeNacimiento &&
                    <p>Tu edad es de {anioActual - anioDeNacimiento} años</p>
                }
                
            </>
    );
}

Saludador.propTypes = {
    nombre: PropTypes.string.isRequired,
    anioDeNacimiento: PropTypes.number.isRequired
}

export default Saludador;
