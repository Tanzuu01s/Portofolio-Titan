import React from "react";
import { BsTools } from "react-icons/bs";
import { FaRunning, FaCode, FaGamepad } from "react-icons/fa";
import PageHeaderContent from "../../component/pageHeaderContent";
import { Line } from "rc-progress";
import { motion } from "framer-motion";
import { skillsData } from "./skill";
import "./styles.scss";

const categoryIcons = {
  "OLARAGA": <FaRunning className="skills__card-icon" />,
  "ACADEMIC IT": <FaCode className="skills__card-icon" />,
  "MLBB ROLE": <FaGamepad className="skills__card-icon" />,
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PageHeaderContent
        headerText="Skills Me"
        icon={<BsTools size={40} />}
      />

      <div className="skills__content-wrapper">
        {skillsData.map((category, i) => (
          <motion.div
            key={i}
            className="skills__card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="skills__card-header">
              {categoryIcons[category.label]}
              <h3 className="skills__category">{category.label}</h3>
            </div>

            <div className="skills__list">
              {category.data.map((skill, j) => (
                <div className="skills__item" key={j}>
                  <p>{skill.skillName}</p>
                  <Line
                    percent={skill.percentege || skill.percentage || 0}
                    strokeWidth={2}
                    strokeColor="var(--yellow-theme-main-color)"
                    trailWidth={2}
                    strokeLinecap="square"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
