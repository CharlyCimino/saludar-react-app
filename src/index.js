
import ReactDOM from 'react-dom';
import Saludador from './Saludador';

const divRoot = document.querySelector("#root");

ReactDOM.render(<Saludador nombre="Carlos" anioDeNacimiento={1993} />, divRoot);