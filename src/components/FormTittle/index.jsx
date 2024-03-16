/* eslint-disable react/prop-types */
import React from "react";
import Typography from "@mui/material/Typography";

const FormTitle = ({ title }) => {
  return (
    <Typography
      variant="h3"
      component="h2"
      color="primary"
      fontWeight="bold"
      sx={{
        pb: 4,
      }}
    >
      {title}
    </Typography>
  );
};

export default FormTitle;
