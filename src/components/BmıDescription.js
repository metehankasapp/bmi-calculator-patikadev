import React from "react";
//components
import BmıTable from "./BmıTable";
const BmiDescription = () => {
  return (
    <div className="center-ctr">
      <div className="desc-area">
        <h5 class="header-5"> BMI introduction</h5>
        <p className="text-normal">
          BMI is a measurement of a person's leanness or corpulence based on
          their height and weight, and is intended to quantify tissue mass. It
          is widely used as a general indicator of whether a person has a
          healthy body weight for their height. Specifically, the value obtained
          from the calculation of BMI is used to categorize whether a person is
          underweight, normal weight, overweight, or obese depending on what
          range the value falls between. These ranges of BMI vary based on
          factors such as region and age, and are sometimes further divided into
          subcategories such as severely underweight or very severely obese.
          Being overweight or underweight can have significant health effects,
          so while BMI is an imperfect measure of healthy body weight, it is a
          useful indicator of whether any additional testing or action is
          required. Refer to the table below to see the different categories
          based on BMI that are used by the calculator.
        </p>
        <h5 class="header-5">BMI table for adults</h5>
        <p className="text-normal">
          This is the World Health Organization's (WHO) recommended body weight
          based on BMI values for adults. It is used for both men and women, age
          18 or older.
        </p>
      </div>

      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <BmıTable />
      </div>
    </div>
  );
};

export default BmiDescription;
