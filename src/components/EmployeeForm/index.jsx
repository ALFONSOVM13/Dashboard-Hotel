import React, { useEffect, useState } from "react";
import InputField from "../InputField";
import DateField from "../DateField";

const EmployeeForm = ({ data }) => {
  const structure = { full_name: "", phone: "" };
  const [employeeData, setEmployeeData] = useState({
    ...structure,
  });
  const [errors, setErrors] = useState({ ...structure });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setEmployeeData({ ...employeeData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  useEffect(() => {
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
        <DateField
          label="Birth"
          name={"birth"}
          value={employeeData.birth}
          handler={handleChange}
        />{" "}
      </form>
    </div>
  );
};

export default EmployeeForm;
