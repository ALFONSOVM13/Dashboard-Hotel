export default {
  convertirFechaAAmPm(fechaISO) {
    const fecha = new Date(fechaISO);
    const formatoAmPm = fecha.toLocaleDateString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return formatoAmPm.replace(",", " ");
  },
};
