import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import useSkillProgress from "../app/hooks/useSkillProgress";
import dynamic from "next/dynamic";

const Skills = ({ dark }) => {
  const [data, setData] = useState({});
  const [isBrowser, setIsBrowser] = useState(false);

  useSkillProgress(); //CORRECT

  useEffect(() => {
    const myFunction = async () => {
    setData( fatchData("/static/info.json"));
  };
  //
  //useEffect(() => {
    myFunction();
    //window.addEventListener("scroll", useSkillProgress);
    setIsBrowser(true);
  }, []);

  if(!isBrowser) return null;

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Coding is my Life</span>
                <h3>I Develop Skills Regularly to Keep Me Update</h3>
                <p>
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {data &&
                  data.skills &&
                  data.skills.map((skill, i) => (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill.value}
                      data-color={skill.color}
                      key={i}
                    >
                      <span>
                        <span className="label">{skill.name}</span>
                        <span className="number">{skill.value}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="right">
              <img src={`/img/skills/${dark ? 2 : 1}.jpg`} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//export default Skills;
export default dynamic (()=> Promise.resolve(Skills), {ssr : false});
