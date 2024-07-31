const Fecha = (fecha) => {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.getMonth();
    const año = date.getFullYear();
    return `${dia}/${mes}/${año}`;
};

const formatoCLP = (precio) => {
    return precio?.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
};

//AGREGAR MAS FUNCIONES DE FORMATEO

const datosFormateados = {
    Fecha,
    formatoCLP
};

export default datosFormateados;