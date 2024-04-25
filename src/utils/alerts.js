import Swal from "sweetalert2";

export default {
  seeAlert(dispatch, id, values, action, text, confirm) {
    console.log("id", id, values);

    Swal.fire({
      title: "Warning",
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        if (action.name.toString() === "deleteFood") {
          dispatch(action(id));
        } else if (action.name.toString() === "putFood") {
          dispatch(action(id, values));
        } else {
          dispatch(action(values));
        }
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
