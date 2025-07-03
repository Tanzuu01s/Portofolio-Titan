import React from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // ← Tambahan
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleNavigateToAboutPage = () => {
    navigate("/about");
  };

  return (
    <motion.section
      id="home"
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="home__text-wrapper">
        <h1>
          Hello, Saya Titan 
          <br />
          PORTFOLIO PROJECTS
        </h1>

        <motion.div
          className="home__buttons"
          initial={{ y: 550 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <button className="about-btn" onClick={handleNavigateToAboutPage}>About Me</button>
        </motion.div>
           <motion.div
          initial={{ y: 550 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >

        <div className="home__social-icons">
          <a href="https://github.com/Tanzuu01s" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/titan.pasya" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
