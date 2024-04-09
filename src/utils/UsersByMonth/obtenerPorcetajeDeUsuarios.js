export const obtenerPorcetajeDeUsuarios = (userByMonth) => {
  var nombreMesActual = new Date().toLocaleString("en-US", { month: "long" });
  if (userByMonth && userByMonth.months && userByMonth.totalUsersByMonth) {
    var indiceMesActual = userByMonth.months.indexOf(nombreMesActual);
    if (indiceMesActual !== -1) {
      var totalUsuariosMesActual = parseInt(
        userByMonth.totalUsersByMonth[indiceMesActual]
      );
      var indiceMesAnterior = indiceMesActual - 1;
      if (indiceMesAnterior < 0) {
        indiceMesAnterior = userByMonth.months.length - 1;
      }
      var totalUsuariosMesAnterior = parseInt(
        userByMonth.totalUsersByMonth[indiceMesAnterior]
      );
      var porcentajeCambio =
        ((totalUsuariosMesActual - totalUsuariosMesAnterior) /
          totalUsuariosMesAnterior) *
        100;
      var mensajePorcentaje =
        porcentajeCambio > 0
          ? "+" + porcentajeCambio.toFixed(2) + "%"
          : porcentajeCambio.toFixed(2) + "%";
      return mensajePorcentaje;
    } else {
      console.log("No se encontraron datos para el mes actual.");
    }
  } else {
    console.log("No hay datos disponibles para mostrar.");
  }
};
