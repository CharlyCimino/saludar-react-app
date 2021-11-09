
import ReactDOM from 'react-dom';
import SaludadorApp from './SaludadorApp';

const divRoot = document.querySelector("#root");

ReactDOM.render(<SaludadorApp anioDeNacimiento={1993} />, divRoot);
/*
    TAREA: Poner un form que pida nombre y año de nacimiento al cliente y al hacer
    'submit' se muestre el saludador en tiempo real (sin recargar la página)
*/