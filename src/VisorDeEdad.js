import React from 'react'
import PropTypes from 'prop-types';

const VisorDeEdad = ({anioDeNacimiento}) => {
    const anioActual = new Date().getFullYear();
    console.log(anioActual, anioDeNacimiento);
    return (
        anioDeNacimiento ?
        <p>Tu edad es de {anioActual - anioDeNacimiento} años</p> :
        null
    )
}

VisorDeEdad.propTypes = {
    anioDeNacimiento: PropTypes.number.isRequired
}

export default VisorDeEdad
