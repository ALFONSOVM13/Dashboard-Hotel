import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TabTitle from "../../../../components/TabTitle";
import { Formik, Form } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import TextInput from "../../../../components/TextInput";
import Swal from "sweetalert2";
import { postCar } from "../../../../redux/Services/Actions/actions";
import SelectInput from "../../../../components/SelectInput";

function CarCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState([]);

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
      <TabTitle title={`Car Creation`} />
      <Formik
        initialValues={{
          brands: "",
          photos: photos,
          transmision: "",
          passenger: "",
          type_car: "",
          price_per_day: "",
          description: "",
          status: "",
        }}
        validationSchema={Yup.object().shape({
          brands: Yup.string().required("The brands is required"),
          type_car: Yup.string()
            .required("The type car is required")
            .notOneOf(["---"], "Please select a type of car."),
          photos: Yup.array()
            .of(Yup.string().required("Each photo must be a string."))
            .min(1, "At least one photo is required.")
            .required("The photos are required."),
          description: Yup.string().required("The description is required."),
          transmision: Yup.string()
            .required("The transmision is required.")
            .notOneOf(["---"], "Please select a transmision."),
          passenger: Yup.string().required("The passenger is required."),
          price_per_day: Yup.string()
            .required("The price is required.")
            .matches(/^\d+(\.\d{1,2})?$/, {
              message: "The price must be a valid positive number.",
              excludeEmptyString: true,
            }),
          status: Yup.string()
            .required("Select an status.")
            .notOneOf(["---"], "Please select a status."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          Swal.fire({
            title: "Warning",
            text: "Are you sure you want to create this car?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then((response) => {
            if (response.isConfirmed) {
              dispatch(postCar(values));
              Swal.fire(`Car created successfully`, "", "success");
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
                <TextInput label="BRANDS" name="brands" />
                <label className=" text-white mt-4">PHOTO URL</label>
                <input
                  type="text"
                  placeholder="Add photo URL"
                  className="border mt-4 mr-4 ml-4 py-2 px-3   text-gray-700 bg-white rounded-md"
                />
                <button
                  type="button"
                  onClick={(e) => handleAddPhoto(e, setFieldValue)}
                  className="px-5 py-3.5 rounded shadow-sm text-white bg-blue-800 mt-5"
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
                  label="TRANSMISION"
                  name="transmision"
                  options={["---", "Manual", "Automatic", "Hybrid"]}
                  labelAlign="left"
                />
              </div>
              <div className="flex flex-col w-full px-3 pb-3 border-2 border-[rgba(10,10,10,0.2)] dark:border-gray-200 rounded-xl h-fit">
                <TextInput label="PASSENGER" name="passenger" />
                <SelectInput
                  label="TYPE OF CAR"
                  name="type_car"
                  options={["---", "Sedan", "Coupe", "Family", "Sport"]}
                  labelAlign="left"
                />
                <TextInput label="PRICE PER DAY" name="price_per_day" />
                <TextInput label="DESCRIPTION" name="description" />
                <SelectInput
                  label="STATUS"
                  name="status"
                  options={["---", "available", "busy", "maintenance"]}
                  labelAlign="left"
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

export default CarCreate;
