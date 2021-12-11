import React, { useState, useEffect } from "react";
//mui
import { TextField, styled } from "@mui/material";
const BmıForm = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmı, setBmı] = useState(0);
  const [bmıtext, setBmıText] = useState("");

  const CssTextField = styled(TextField)({
    "&": {
      width: "250px",
      marginBottom: "20px",
    },
    "& label": {
      color: "#CAD2C5",
      fontSize: "15px",
      backgroundColor: "#52796F",
      width: "100px !important",
    },
    "& label.Mui-focused": {
      color: "#CAD2C5",
      width: "100px",
      backgroundColor: "#52796F",
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

  const submitHandler = (e) => {
    //PD
    e.preventDefault();
    //lOCALSTORAGE
    localStorage.setItem("WEIGHT", weight);
    localStorage.setItem("HEIGHT", height);
    //CALCULATE BMI
    const bmıCalculated = (weight / (height * height)).toFixed(2);
    setBmı(bmıCalculated);
    //SET BMI TEXT
    if (bmıCalculated < 16) {
      setBmıText("You Are Severe Thinness");
    }
    if (bmıCalculated >= 16 && bmıCalculated <= 17) {
      setBmıText("You Are Moderate Thinness");
    }
    if (bmıCalculated > 17 && bmıCalculated <= 18.5) {
      setBmıText("You Are Mild Thinness");
    }
    if (bmıCalculated > 18.5 && bmıCalculated <= 25) {
      setBmıText("You Are Normal");
    }
    if (bmıCalculated > 25 && bmıCalculated <= 30) {
      setBmıText("You Are Overweight");
    }
    if (bmıCalculated > 30 && bmıCalculated <= 35) {
      setBmıText("You Are In Obese Class I");
    }
    if (bmıCalculated > 35 && bmıCalculated <= 40) {
      setBmıText("You Are In Obese Class II");
    }
    if (bmıCalculated > 40) {
      setBmıText("You Are In Obese Class III");
    }
    
    //RESET
    setHeight();
    setWeight();
  };

  useEffect(() => {
    

    if (!localStorage.getItem("WEIGHT") && !localStorage.getItem("HEIGHT")) {
      console.log(
        localStorage.getItem("WEIGHT"),
        localStorage.getItem("HEIGHT")
      );
    }
  }, []);

  return (
    <div className="form container">
      <div className="form-header">
        <h5>Calculate Your BMI</h5>
      </div>
      <form onSubmit={submitHandler}>
        <CssTextField
          onChange={(e) => setWeight(e.target.value)}
          id="outlined-basic"
          label="Weight(kg)"
          variant="outlined"
          value={weight}
          inputProps={{ pattern: "^[.0-9]*$" }}
          helperText="ex:85"
        />

        <CssTextField
          onChange={(e) => setHeight(e.target.value)}
          id="outlined-basic"
          label="Height(cm)"
          variant="outlined"
          value={height}
          inputProps={{ pattern: "^[.0-9]*$" }}
          helperText="ex:1.85"
        />
        <button type="submit" className="form-btn">
          Calculate
        </button>
      </form>

      {bmı !== 0 && bmı !== null && bmı !== undefined && !isNaN(bmı) && (
        <div>
          <div className="bmı-text">Your bmı {bmı}</div>
          <div className="bmı-text">{bmıtext}</div>
        </div>
      )}
    </div>
  );
};

export default BmıForm;
