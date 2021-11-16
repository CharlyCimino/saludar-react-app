import React from 'react'
import PropTypes from 'prop-types';


const Saludador = ({nombre = "anónimo"}) => {
    return <p>Hola {nombre}!</p>
}

Saludador.propTypes = {
    nombre: PropTypes.string
}

export default Saludador
