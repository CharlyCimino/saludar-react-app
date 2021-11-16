import React from 'react'
import PropTypes from 'prop-types';
import getEdad from '../helpers/calculadoraDeEdad';

const VisorDeEdad = ({fechaNac}) => {
    const dateNac = new Date(fechaNac);
    
    return (
        fechaNac ?
        <p>Tu edad es de {getEdad(dateNac)} años</p> :
        null
    )
}

VisorDeEdad.propTypes = {
    fechaNac: PropTypes.string
}

export default VisorDeEdad
