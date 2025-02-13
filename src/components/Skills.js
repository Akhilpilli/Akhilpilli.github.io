import React from "react";
import "../styles/Skills.css";

const Skills = ({skills}) => {
  return (
    <div className="skill-container">
      <h1 className="skills-title">SKILLS</h1>
      <div className="skills">
        {Object.keys(skills).map((key, index) => (
          <div key={index} className={`skill-section ${key}`}>
            <h3>{key.replace(/_/g, ' ').trim()}</h3>
            <div className="skill-list">
              {skills[key].map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
