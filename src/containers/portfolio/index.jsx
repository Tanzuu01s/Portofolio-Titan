import React, { useState } from "react";
import { BsCollectionFill } from "react-icons/bs";
import PageHeaderContent from "../../component/pageHeaderContent";
import { motion, AnimatePresence } from "framer-motion";
import ImageOne from "../../assets/mos.jpg";
import ImageTwo from "../../assets/kuliahumum.jpg";
import ImageThree from "../../assets/pkkmb.jpg";
import ImageFour from "../../assets/hiking.jpg";
import ImageFive from "../../assets/coding.jpg";
import ImageSix from "../../assets/games.jpg";
import ImageSeven from "../../assets/mancing.jpg";
import "./styles.scss";

const portfolioData = [
  { uniqueId: 1, id: 2, image: ImageOne, name: "MOS" },
  { uniqueId: 2, id: 2, image: ImageTwo, name: "KULIA UMUM" },
  { uniqueId: 3, id: 2, image: ImageThree, name: "PKKMB" },
  { uniqueId: 4, id: 3, image: ImageFour, name: "HIKING" },
  { uniqueId: 5, id: 3, image: ImageFive, name: "NGODING" },
  { uniqueId: 6, id: 3, image: ImageSix, name: "GEMERS" },
  { uniqueId: 7, id: 3, image: ImageSeven, name: "FISHING" },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Sertifikat" },
  { filterId: 3, label: "Hobby" },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalImage, setModalImage] = useState(null); // <- modal image

  const handleFilter = (currentId) => setFilteredValue(currentId);
  const handleHover = (index) => setHoveredIndex(index);
  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  const getFilteredData = () => {
    if (filteredValue === 1) return portfolioData;
    return portfolioData.filter((item) => item.id === filteredValue);
  };

  return (
    <motion.section
      id="portfolio"
      className="portfolio"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsCollectionFill size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <motion.li
              key={item.filterId}
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          <AnimatePresence>
            {getFilteredData().map((item, index) => (
              <motion.div
                key={item.uniqueId}
                className="portfolio__content__cards__item"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <img alt="portfolio item" src={item.image} />
                </div>

                <motion.div
                  className="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.name}</p>
                      <button onClick={() => openModal(item.image)}>Buka</button>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img src={modalImage} alt="Full View" className="modal-content" />
        </div>
      )}
    </motion.section>
  );
};

export default Portfolio;
