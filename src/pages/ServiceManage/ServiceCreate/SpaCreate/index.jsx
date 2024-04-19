import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TabTitle from "../../../../components/TabTitle";
import { Formik, Form } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import TextInput from "../../../../components/TextInput";
import SelectInput from "../../../../components/SelectInput";
import Swal from "sweetalert2";
import { postSpa } from "../../../../redux/Services/Actions/actions";

function SpaCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState([]);
  const [type, setType] = useState([]);

  const handleAddPhoto = (e, setFieldValue) => {
    const newPhoto = e.target.previousElementSibling.value;
    setPhotos([...photos, newPhoto]);
    setFieldValue("photos", [...photos, newPhoto]);
    e.target.previousElementSibling.value = "";
  };

  const handleRemovePhoto = (index, setFieldValue) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
    setFieldValue("photos", newPhotos);
  };

  const handleAddType = (e, setFieldValue) => {
    const newType = e.target.previousElementSibling.value;
    setType([...type, newType]);
    setFieldValue("service_type", [...type, newType]);
    e.target.previousElementSibling.value = "";
  };

  const handleRemoveType = (index, setFieldValue) => {
    const newTypes = type.filter((_, i) => i !== index);
    setType(newTypes);
    setFieldValue("service_type", newTypes);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Warning",
      text: "Are you sure you want to cancel the action?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((response) => {
      if (response.isConfirmed) {
        navigate(-1);
      } else if (response.isDismissed) {
        return;
      }
    });
  };

  return (
    <div className=" w-[95%] mx-auto py-5">
      <TabTitle title={`Spa Creation`} />
      <Formik
        initialValues={{
          spa_room: "",
          name: "",
          description: "",
          price: "",
          service_type: [],
          photos: [],
          max_capacity: "",
          room_status: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("The name is required"),
          description: Yup.string()
            .required("The description is required.")
            .min(10, "The description must have at least 10 characters.")
            .max(100, "The description cannot have more than 100 characters."),
          spa_room: Yup.string().required("The spa room is required."),
          service_type: Yup.array()
            .of(Yup.string().required("Each service type must be a string."))
            .min(1, "At least one service type is required.")
            .required("The service type are required."),
          price: Yup.string()
            .required("The price is required.")
            .matches(/^\d+(\.\d{1,2})?$/, {
              message: "The price must be a valid positive number.",
              excludeEmptyString: true,
            }),
          photos: Yup.array()
            .of(Yup.string().required("Each photo must be a string."))
            .min(1, "At least one photo is required.")
            .required("The photos are required."),
          max_capacity: Yup.string()
            .required("The max capacity is required")
            .matches(/^\d+(\.\d{1,2})?$/, {
              message: "The capacity must be a valid positive number.",
              excludeEmptyString: true,
            }),
          room_status: Yup.string()
            .required("The room status is required")
            .notOneOf(["---"], "Please select a room status."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          Swal.fire({
            title: "Warning",
            text: "Are you sure you want to edit this spa service?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then((response) => {
            if (response.isConfirmed) {
              dispatch(postSpa(values));
              Swal.fire(`Spa edited successfully`, "", "success");
              navigate(-1);
            } else if (response.isDismissed) {
              return;
            }
          });
          setSubmitting(false);
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className="p-5 grid grid-cols-1 xl:grid-cols-2 gap-10">
              <div className="flex flex-col w-full px-3 pb-3 border-2 border-[rgba(10,10,10,0.2)] dark:border-gray-200 rounded-xl h-fit">
                <TextInput
                  name="name"
                  label="NAME"
                  placeholder="Enter the name of the service"
                />
                <label className=" text-white mt-4">PHOTO URL</label>
                <input
                  type="text"
                  placeholder="Add photo URL"
                  className="border mt-4 mr-4 ml-4 py-2 px-3   text-gray-700 bg-white rounded-md"
                />
                <button
                  type="button"
                  onClick={(e) => handleAddPhoto(e, setFieldValue)}
                  className="justify-center px-5 py-3.5 rounded shadow-sm text-white bg-blue-800 mt-5"
                >
                  ADD
                </button>
                {values.photos.map((photo, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-white m-2 mt-4 truncate">
                      {photo}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemovePhoto(index, setFieldValue)}
                      className="ml-2 p-2 mt-4 text-white bg-blue-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <ErrorMessage
                  name="photos"
                  component="div"
                  className="text-red-500 mb-2 text-sm"
                />
                <SelectInput
                  label="ROOM STATUS"
                  name="room_status"
                  options={["---", "available", "unavailable"]}
                  labelAlign="left"
                />
                <TextInput
                  label="SPA ROOM"
                  name="spa_room"
                  placeholder="Enter the spa room"
                />
              </div>
              <div className="flex flex-col w-full px-3 pb-3 border-2 border-[rgba(10,10,10,0.2)] dark:border-gray-200 rounded-xl h-fit">
                <TextInput
                  rows="6"
                  label="DESCRIPTION"
                  name="description"
                  placeholder="Enter the description of the service"
                />
                <TextInput
                  name="price"
                  label="PRICE"
                  placeholder="Enter the price of the service"
                />
                <label className=" text-white mt-4">SERVICE TYPE</label>
                <input
                  type="text"
                  placeholder="Add service type"
                  className="border mt-4 mr-4 ml-4 py-2 px-3   text-gray-700 bg-white rounded-md"
                />
                <button
                  type="button"
                  onClick={(e) => handleAddType(e, setFieldValue)}
                  className="justify-center px-5 py-3.5 rounded shadow-sm text-white bg-blue-800 mt-5"
                >
                  ADD
                </button>
                {values.service_type.map((photo, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-white m-2 mt-4 truncate">
                      {photo}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveType(index, setFieldValue)}
                      className="ml-2 p-2 mt-4 text-white bg-blue-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <ErrorMessage
                  name="service_type"
                  component="div"
                  className="text-red-500 mb-2 text-sm"
                />
                <TextInput
                  name="max_capacity"
                  label="MAX CAPACITY"
                  placeholder="Enter the price of the service"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5">
              <button
                type="submit"
                className="btn btn-primary mt-4 w-full md:w-fit bg-green-700 text-white p-3 mb-10"
                disabled={isSubmitting}
              >
                Save Changes
              </button>
              <button
                className="btn btn-primary mt-4 w-full md:w-fit bg-red-700 text-white p-3 mb-10"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SpaCreate;
