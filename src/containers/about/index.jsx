import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/pageHeaderContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Myfoto from "../../assets/titanc.jpg";
import "./styles.scss";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";



const personalDetails = [
  { label: "Nama :", value: "Muhammad Titan Pasya" },
  { label: "Umur :", value: "19 Tahun" },
  { label: "Status :", value: "Mahasiswa" },
  { label: "Tinggal :", value: "Tembung" },
  { label: "Email :", value: "titanpasya100@gmail.com" },
];

const jobSummary = "Halo! Nama saya Titan, seorang mahasiswa Teknik Informatika yang memiliki minat besar dalam dunia teknologi dan pengembangan perangkat lunak. Saya gemar mengeksplorasi berbagai hal baru, khususnya dalam pengembangan website menggunakan teknologi modern seperti React JS. Di luar dunia akademik dan coding, saya juga aktif bermain Mobile Legends dan menyukai berbagai peran di dalam game, dari Jungler hingga Roamer. Bagi saya, kerja sama tim dan strategi adalah bagian penting, baik dalam game maupun dalam pengembangan proyek nyata.";

const About = () => {
  const location = useLocation();

  return (
    <motion.section
      id="about"
      className="about"
      key={location.pathname}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} />} />

      <div className="about__content">
        {/* KIRI: Informasi */}
        <motion.div
          className="about__content__personalWrepper"
          initial={{ x: -900 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <h3>Informasi</h3>
          <p>{jobSummary}</p>

          <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <h3 className="personalInformationHeaderText">Perseonal</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        

        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div className="rotating-icons">
              <a href="https://wa.me/6285372690211" className="WA" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
              <a href="https://facebook.com/Tan Pasy" className="FB" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://instagram.com/titan.pasya" className="IG" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://tiktok.com/@titanpasya12" className="tiktok" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
            </div>

            <img src={Myfoto} alt="Foto Titan" className="centered-profile-photo" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
