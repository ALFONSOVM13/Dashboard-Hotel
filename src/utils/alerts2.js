import Swal from "sweetalert2";

export default {
  async seeAlert(dispatch, id, values, action, text, confirm, successCallback) {
    await Swal.fire({
      title: "Warning",
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        if (action.text === "delete") {
          dispatch(action.execute(id));
        } else if (action.text === "edit") {
          dispatch(action.execute(id, values));
        } else {
          dispatch(action.execute(values));
        }
        if (successCallback) successCallback();
        Swal.fire({
          title: confirm[0],
          text: confirm[1],
          icon: confirm[2],
        }).then((result) => result);
      } else if (result.isDismissed) {
        return;
      }
    });
  },
};
