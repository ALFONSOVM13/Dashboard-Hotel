import Swal from "sweetalert2";

export default {
  seeAlert(dispatch, id, action, text, confirm) {
    Swal.fire({
      title: "Advertencia",
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(action(id));
        Swal.fire({
          title: confirm[0],
          text: confirm[1],
          icon: confirm[2],
        });
      } else if (result.isDismissed) {
        return;
      }
    });
  },
};
