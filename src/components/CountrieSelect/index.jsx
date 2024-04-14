import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelect({ onCountryChange, setFieldValue }) {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
    onCountryChange(selectedOption.value);
    setFieldValue("country", selectedOption.value);
  };

  return <Select options={options} value={value} onChange={changeHandler} />;
}

export default CountrySelect;
