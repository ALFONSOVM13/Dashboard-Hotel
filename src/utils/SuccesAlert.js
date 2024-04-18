import Swal from "sweetalert2";

export async function successAlert(
  title = "Success!",
  text = "Operation Successfully!",
  icon = "success"
) {
  return await Swal.fire({
    title,
    text,
    icon,
  }).then((response) => console.log(response));
}

export async function failAlert(
  title = "Fail!",
  text = "Operation Failed!",
  icon = "error"
) {
  return await Swal.fire({
    title,
    text,
    icon,
  }).then((response) => console.log(response));
}
