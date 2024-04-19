import React, { useEffect, useState } from "react";
import InputField from "../InputField";
import DateField from "../DateField";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import SelectField from "../SelectField";

const EmployeeForm = ({ data }) => {
  const navigate = useNavigate();
  const structure = { full_name: "", phone: "" };
  const [employeeData, setEmployeeData] = useState({
    ...structure,
  });
  const [errors, setErrors] = useState({ ...structure });
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;

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
            setCountries(countryNames);
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    console.log("data", data);
    if (data) {
      const { guest_profile } = data;
      delete data.guest_profile;
      data = { ...data, ...guest_profile };
      setEmployeeData(data);
    }
  }, [data]);

  useEffect(() => {
    console.log("employeeData", employeeData);
  }, [employeeData]);

  return (
    <div>
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
        />{" "}
        <InputField
          label="Email"
          name={"email"}
          value={employeeData.email}
          handler={handleChange}
        />{" "}
        <InputField
          label="Address"
          name={"address"}
          value={employeeData.address}
          handler={handleChange}
        />{" "}
        <InputField
          label="DNI"
          name={"document"}
          value={employeeData.address}
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
          options={countries.map((country, index) => ({
            id: index,
            name: country,
          }))}
        />{" "}
        <SelectField
          label="Gender"
          name={"gender"}
          value={employeeData.gender}
          handler={handleChange}
          options={[
            { id: 1, name: "Male" },
            { id: 2, name: "Female" },
            { id: 1, name: "Helicopter" },
          ]}
        />{" "}
      </form>
      <div className="flex gap-5 justify-center my-5">
        <Button className={"bg-green-700 text-white"}>Save Changes</Button>
        <Button className={"bg-red-700 text-white"} action={() => navigate(-1)}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EmployeeForm;
