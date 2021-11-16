import React from 'react'

const Formulario = ({nombre, setNombre}) => {

    const handleChange = (event) => {
        event.preventDefault(); // Evita que se recargue la página al hacer 'submit'
        setNombre(event.target.value);
    }

    return (
        <form>
            <input type="text" value={nombre} onChange={handleChange}></input>
        </form>
    )
}

export default Formulario
