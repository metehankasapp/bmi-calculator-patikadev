import React from "react";
//mui
import { TextField, styled } from "@mui/material";
const BmıForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const CssTextField = styled(TextField)({
    
    "&": {
      width: "250px",
      marginBottom:"20px",
    },
    "& label": {
      color: "#CAD2C5",
      fontSize: "15px",
    },
    "& label.Mui-focused": {
      color: "#CAD2C5",
      width:"100px",
      backgroundColor:'#52796F'
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#CAD2C5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#CAD2C5",
      },
      "&:hover fieldset": {
        borderColor: "#CAD2C5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#CAD2C5",
      },
    },
  });

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <CssTextField
          id="outlined-basic"
          label="Weight(kg)"
          variant="outlined"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        <CssTextField
          id="outlined-basic"
          label="Height(cm)"
          variant="outlined"

          
        />
      </form>
    </div>
  );
};

export default BmıForm;
