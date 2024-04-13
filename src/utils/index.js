export function convertirFechaAAmPm(fechaISO) {
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
}

export async function reconectar(callback, condicion = false, intentos = 0) {
  if (intentos === 0) condicion = await callback();
  if (condicion || intentos > 100) return;
  condicion = await attemp(callback);
  console.log("Trying attemp: " + intentos, ". Reconnecting... ");

  await reconectar(callback, condicion, intentos + 1);
}

async function attemp(callback) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve(callback());
    }, 5000);
  });
}
