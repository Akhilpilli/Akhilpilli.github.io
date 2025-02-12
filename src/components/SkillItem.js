import React from "react";
import "../styles/SkillItem.css";

const SkillItem = ({skill}) => {
  return (
      <span className={`skill-icon ${skill}`}>{skill}</span>
  );
};

export default SkillItem;
