import React, {Fragment} from 'react'
import PropTypes from 'prop-types';

const Saludador = ({nombre = "extraño", apellido = ""}) => {
    /*
        Equivalente (requiere import de Fragment):
        <Fragment>
                <h1>SaludadorApp</h1>
                <p>Hola {nombre} {apellido}</p>
        </Fragment>
    */
    return (
            <>
                <h1>SaludadorApp</h1>
                <p>Hola {nombre} {apellido}</p>
            </>
    );
}

Saludador.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired
}

export default Saludador;
