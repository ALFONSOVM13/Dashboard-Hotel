import { useEffect, useState } from "react";

export default function PriceField({ label, name, value, handler, error }) {
  const [inputs, setInputs] = useState({});

  const allowDecimalAndNumbersOnly = (e) => {
    console.log(e.key);
    if (
      !Number(e.key) &&
      e.key !== "." &&
      e.key !== "0" &&
      e.key !== "Backspace" &&
      e.key !== "Tab" &&
      e.key !== "Enter"
    )
      e.preventDefault();
  };

  const formatPrice = (e) => {
    const { value } = e.target;
    console.log("Value", value);
    let formattedValue,
      numberValue = null;
    // Permitir solo dígitos y punto decimal
    const numbers = value.toString().replace(/[^0-9.]/g, "");

    // Formatear el valor con símbolo de dinero y dos decimales
    if (numbers) {
      numberValue = parseFloat(numbers).toFixed(2);
      formattedValue = `$${numberValue}`;
      console.log(
        "Antes de la escritura de inputs",
        formattedValue,
        numberValue
      );
      setInputs({ formattedPrice: formattedValue, [name]: numberValue });
    }
  };

  useEffect(() => {
    formatPrice({ target: { ["value"]: value } });
  }, []);

  useEffect(() => {
    if (inputs.formattedPrice) {
      setInputs({
        ...inputs,
        [name]: inputs.formattedPrice.replace("$", "").replace(" ", ""),
      });
      handler({
        target: { name, ["value"]: inputs[name] },
      });
    }
  }, [inputs.formattedPrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <>
      {" "}
      <div className="text-left mt-5 text-base font-medium tracking-normal dark:text-white  text-gray-700">
        {" "}
        {label}{" "}
      </div>{" "}
      <input type="hidden" value={value} name={name} />
      <input
        placeholder="$0.00"
        type="text"
        min={0}
        name="formattedPrice"
        value={inputs.formattedPrice}
        className="pl-3 shrink-0 mt-3.5 rounded-lg border border-solid bg-gray-100 bg-opacity-90 border-zinc-800 border-opacity-30 h-[41px] dark:text-black"
        onBlur={formatPrice}
        onKeyDown={allowDecimalAndNumbersOnly}
        onChange={handleChange}
      />{" "}
      {error !== "" && <span className="text-red-700 font-bold">{error}</span>}
    </>
  );
}
