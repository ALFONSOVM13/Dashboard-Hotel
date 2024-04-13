import React, { useEffect } from "react";
import Swal from "sweetalert2";

const SaveDontSaveCancel = ({ onSave, onDontSave, onCancel }) => {
  useEffect(() => {
    Swal.fire({
      title: "Save changes?",
      showCancelButton: onDontSave !== undefined,
      confirmButtonText: "Save",
      cancelButtonText: "Don't Save",
      showDenyButton: true,
      denyButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        onSave();
      } else if (result.isDenied) {
        onCancel();
      } else {
        onDontSave();
      }
    });
  }, [onSave, onDontSave, onCancel]);

  return null; // no need to render anything
};

export default SaveDontSaveCancel;
