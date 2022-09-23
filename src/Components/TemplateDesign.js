import React from "react";
import TemplateOne from "../Template/TemplateOne";
import TemplateTwo from "../Template/TemplateTwo";

const TemplateDesign = () => {
  return (
    <div>
      <h2>TemplateDesign</h2>
      <div className="d-flex justify-content-evenly">
        <TemplateOne />
        <TemplateTwo />
      </div>
    </div>
  );
};

export default TemplateDesign;
