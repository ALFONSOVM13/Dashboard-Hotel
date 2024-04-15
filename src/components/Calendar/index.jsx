import { Calendar, Badge } from "antd";
import { useState } from "react";
// import "antd/dist/antd.css";

const data = {
  "2024-02-15": [{ content: "Evento importante 1" }],
  "2022-01-20": [
    { content: "Evento importante 2" },
    { content: "Evento especial" },
  ],
  "2022-02-10": [{ content: "Reunión de equipo" }],
};

const CalendarComponent = () => {
  const [selectedValue, setSelectedValue] = useState();

  const dateCellRender = (value) => {
    const listData = data[value.format("YYYY-MM-DD")] || [];
    return (
      <ul>
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status="success" text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const onSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} onSelect={onSelect} />
      <div style={{ marginTop: 20 }}>
        Fecha seleccionada:{" "}
        {selectedValue && selectedValue.format("YYYY-MM-DD")}
      </div>
    </div>
  );
};

export default CalendarComponent;
