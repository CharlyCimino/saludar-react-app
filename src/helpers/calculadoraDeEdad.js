import moment from 'moment';

const getEdad = (fechaNac) => {
    const momentActual = moment();
    const momentNac = moment(fechaNac);
    return momentActual.diff(momentNac, 'years');
}

export default getEdad
