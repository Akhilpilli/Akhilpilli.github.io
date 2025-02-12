import config from "../config/constants.json";
import TitleChanger from "../components/TitleChanger";
import "../styles/About.css";

function About() {
    const skillList = config.skillList;
    return (
      <div className="about">
          <div className="about-details">
            <div className="about-description">
              <div className="name-role">
                <div>
                  <h1>{config.name}</h1>
                  <TitleChanger titles={config.jobTitles} />
                </div>
              </div>
              <h3 className="self-description">Experienced software engineer with a strong focus on building scalable, high-performance systems. Passionate about solving complex challenges and delivering solutions that align with business goals.</h3>
              <div className="social-profile">
                {Object.entries(config.scialProfiles).map(([key, link]) => (
                  <a 
                    key={key}
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`profile-link ${key}`}
                  >
                    <div className={`logo ${key}`}></div>
                  </a>
                ))}
              </div>
            </div>
            
            <h1 className="skills-title">SKILLS</h1>
            <div className="skills">
                {Object.keys(skillList).map((key, index) => (
                  <div key={index} className={`skill-section ${key}`}>
                      <h3>{key.replace(/_/g, ' ').trim()}</h3>
                      <div>
                      {skillList[key].map((skill, skillIndex) => (
                          // <SkillItem key={skillIndex} skill={skill} />
                          <span key={skillIndex} className="skill-item">{skill}</span>
                      ))}
                      </div>
                  </div>
                ))}
              </div>
          </div>

      </div>
    );
  }
  
  export default About;
  