import React from "react";

const BmıTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th> Category </th> <th> BMI range - kg / m2 </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> Severe Thinness </td> <td> &lt; 16 </td>
        </tr>
        <tr>
          <td> Moderate Thinness </td> <td> 16 - 17 </td>
        </tr>
        <tr>
          <td> Mild Thinness </td> <td> 17 - 18.5 </td>
        </tr>
        <tr>
          <td> Normal </td> <td> 18.5 - 25 </td>
        </tr>
        <tr>
          <td> Overweight </td> <td> 25 - 30 </td>
        </tr>
        <tr>
          <td> Obese Class I </td> <td> 30 - 35 </td>
        </tr>
        <tr>
          <td> Obese Class II </td> <td> 35 - 40 </td>
        </tr>
        <tr>
          <td> Obese Class III </td> <td> &gt; 40 </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BmıTable;
