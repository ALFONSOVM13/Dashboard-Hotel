export default {
  convertirFechaAAmPm(fechaISO) {
    const fecha = new Date(fechaISO);
    const formatoAmPm = fecha.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return formatoAmPm.replace(",", " ");
  },
};
