export const obtenerUsuarioPorMes = (userByMonth) => {
  var nombreMesActual = new Date().toLocaleString("en-US", { month: "long" });
  if (userByMonth && userByMonth.months && userByMonth.totalUsersByMonth) {
    var indiceMesActual = userByMonth.months.indexOf(nombreMesActual);
    if (indiceMesActual !== -1) {
      var totalUsuariosMesActual =
        userByMonth.totalUsersByMonth[indiceMesActual];
      return totalUsuariosMesActual;
    } else {
      console.log("No se encontraron datos para el mes actual.");
    }
  } else {
    console.log("No hay datos disponibles para mostrar.");
  }
};
