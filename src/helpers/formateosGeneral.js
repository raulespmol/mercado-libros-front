// FECHA FORMATEADA, EJ: 07/09/2021
const Fecha = (fecha) => {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.getMonth();
    const año = date.getFullYear();
    return `${dia}/${mes}/${año}`;
};

// FORMATO DE PRECIO A CLP, EJ: $ 10.000
const formatoCLP = (precio) => {
    return precio?.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
};

// SELECT DE AÑOS DESDE 1900 HASTA EL AÑO ACTUAL
const selectAnios = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1900; year--) {
      years.push(year);
    }
    return years;
};

const datosFormateados = {
    Fecha,
    formatoCLP,
    selectAnios
};

export default datosFormateados;