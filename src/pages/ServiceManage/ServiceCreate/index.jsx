import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TabTitle from "../../../components/TabTitle";
import { Formik, Form } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import TextInput from "../../../components/TextInput";

function ServiceCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photoUrl, setPhotoUrl] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className=" w-[95%] mx-auto py-5">
      <TabTitle title={`Service Creation`} />
      <Formik
        initialValues={{
          name: "",
          type: "",
          imageUrl: photoUrl,
          price: "",
          description: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("The name is required"),
          description: Yup.string().required("The description is required."),
          type: Yup.string().required("The type is required."),
          imageUrl: Yup.string().required("The image is required."),

          price: Yup.string()
            .required("The price is required.")
            .matches(/^\d+(\.\d{1,2})?$/, {
              message: "The price must be a valid positive number.",
              excludeEmptyString: true,
            }),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="p-5 grid grid-cols-1 xl:grid-cols-2 gap-10">
              <div className="flex flex-col w-full px-3 pb-3 border-2 border-[rgba(10,10,10,0.2)] dark:border-gray-200 rounded-xl h-fit">
                <TextInput
                  name="type"
                  label="Type"
                  placeholder="Enter a type of service"
                />
                <label className="text-bold text-lg mt-4 dark:text-white ">
                  Image url
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Enter the URL of an image"
                  onChange={(e) => {
                    setPhotoUrl(e.target.value);
                    setFieldValue("imageUrl", e.target.value);
                  }}
                  className="border mt-4 mr-4 ml-4 py-2 px-3 text-gray-700 bg-white rounded-md"
                />
                <img
                  loading="lazy"
                  src={photoUrl}
                  className="mx-auto img-container w-[200px] h-[200px] bg-cover rounded-xl border-2 border-slate-400 my-8"
                />
                <ErrorMessage
                  name="imageUrl"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>
              <div className="flex flex-col w-full px-3 pb-3 border-2 border-[rgba(10,10,10,0.2)] dark:border-gray-200 rounded-xl h-fit">
                <TextInput
                  name="name"
                  label="Name"
                  placeholder="Enter the name of the service"
                />
                <TextInput
                  rows="6"
                  label="Service Description"
                  name="description"
                  placeholder="Enter the description of the service"
                />
                <TextInput
                  name="price"
                  label="Price"
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

export default ServiceCreate;
