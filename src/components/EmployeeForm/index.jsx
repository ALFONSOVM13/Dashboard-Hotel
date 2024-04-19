import React, { useEffect, useState } from "react";
import InputField from "../InputField";
import DateField from "../DateField";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import SelectField from "../SelectField";
import * as yup from "yup";
import { schema } from "./validation";
import { updateEmployee } from "../../redux/Employees/Actions/actions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import moment from "moment";

const EmployeeForm = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genders = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Helicopter" },
  ];

  const guestProfileStructure = {
    full_name: "",
    phone_number: "",
    email: "",
    address: "",
    document: "",
    birth: "",
    country: "",
    gender: "",
  };
  const [employeeData, setEmployeeData] = useState({
    ...guestProfileStructure,
  });
  const [errors, setErrors] = useState({ ...guestProfileStructure });
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "birth") {
      value = moment(value).format("YYYY-MM-DD");
    }
    if (name === "gender") {
      value = parseInt(value);
      console.log(genders.find((gender) => gender.id === value));
    }

    setEmployeeData({ ...employeeData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  useEffect(() => {
    fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token":
          "uLmMbkZBbbL5ExZ2xmGYWb-qORHjJ8fBy3RMmMfB3KEyCnLhMabei7gl53LhaxMmKm4",
        "user-email": "tomy_ramos1991@yahoo.com.ar",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const authToken = data.auth_token;
        fetch("https://www.universal-tutorial.com/api/countries", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const countryNames = data.map((item) => item.country_name);
            countryNames.unshift("---");
            setCountries(
              countryNames.map((country, index) => ({
                id: index,
                name: country,
              }))
            );
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    if (data && countries.length > 0) {
      const { guest_profile } = data;
      delete data.guest_profile;
      data = {
        ...data,
        ...guest_profile,
        gender: genders.find(
          (g) => g.name.toLowerCase() === guest_profile.gender
        )
          ? genders.find((g) => g.name.toLowerCase() === guest_profile.gender)
              .id
          : null,
        country: countries.find((c) => c.name === guest_profile.country)
          ? countries.find((c) => c.name === guest_profile.country).id
          : null,
      };
      setEmployeeData(data);
    }
  }, [data, countries]);

  useEffect(() => {
    console.log("employeeData", employeeData);
  }, [employeeData]);

  const saveChanges = async () => {
    try {
      await schema.validate(employeeData, {
        abortEarly: false,
      });

      const requestData = {
        full_name: employeeData.full_name,
        phone_number: employeeData.phone_number,
        gender: genders
          .find((g) => g.id === employeeData.gender)
          .name.toLowerCase(),
        document: employeeData.document,
        country: countries.find((c) => {
          return c.id === Number(employeeData.country);
        }).name,
        birth: employeeData.birth,
        address: employeeData.address,
      };

      const token = Cookies.get("token");
      if (!token) {
        console.error("No se encontró el token en las cookies");
        return;
      }

      const response = await dispatch(
        updateEmployee(employeeData.user_id, requestData)
      ).then(() => console.log("Se ejecuta"));
      await Swal.fire(
        data ? `Profile updated` : "Profile Created",
        "",
        "success"
      );
      navigate(-1);
    } catch (error) {
      const errors = error.inner?.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
      console.log(error);
      setErrors(errors);
    }
  };

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  return (
    <div>
      {!data && <NewUserForm />}
      <form className="p-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField
          label="Full Name"
          name={"full_name"}
          value={employeeData.full_name}
          handler={handleChange}
        />{" "}
        <InputField
          label="Phone"
          name={"phone_number"}
          value={employeeData.phone_number}
          handler={handleChange}
          error={errors?.phone_number}
        />{" "}
        <InputField
          label="Email"
          name={"email"}
          value={employeeData.email}
          handler={handleChange}
          error={errors?.email}
        />{" "}
        <InputField
          label="Address"
          name={"address"}
          type={"textarea"}
          value={employeeData.address}
          handler={handleChange}
        />{" "}
        <InputField
          label="DNI"
          name={"document"}
          value={employeeData.document}
          handler={handleChange}
        />{" "}
        <DateField
          label="Birth"
          name={"birth"}
          value={employeeData.birth}
          handler={handleChange}
        />{" "}
        <SelectField
          label="Country"
          name={"country"}
          value={employeeData.country}
          handler={handleChange}
          options={countries}
          error={errors?.country}
        />{" "}
        <SelectField
          label="Gender"
          name={"gender"}
          value={employeeData.gender}
          handler={handleChange}
          options={genders}
          error={errors?.gender}
        />{" "}
      </form>
      <div className="flex gap-5 justify-center my-5">
        <Button className={"bg-green-700 text-white"} action={saveChanges}>
          Save Changes
        </Button>
        <Button className={"bg-red-700 text-white"} action={() => navigate(-1)}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default EmployeeForm;
