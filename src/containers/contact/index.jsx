import React, { useRef, useState } from "react";
import { MdContactMail } from "react-icons/md";
import PageHeaderContent from "../../component/pageHeaderContent";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      toast.warn("Isi semua kolom terlebih dahulu!");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_20102006",
        "template_cgl96fo",
        form.current,
        "esISur05ygmIpqrWi"
      )
      .then(() => {
        toast.success("✅ Pesan berhasil dikirim!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("❌ Gagal mengirim pesan. Silakan coba lagi.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <PageHeaderContent
        headerText="Contact"
        icon={<MdContactMail size={40} />}
      />

      <div className="contact__content">
        <motion.h3
          className="contact__content__header-text"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Let's Talk
        </motion.h3>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact__content__form"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact__content__form__controlswrapper">
            <div className="nameWrapper">
              <input
                required
                name="name"
                className="inputName"
                type="text"
                placeholder=" "
                aria-label="Your Name"
              />
              <label htmlFor="name" className="nameLabel">Name</label>
            </div>

            <div className="emailWrapper">
              <input
                required
                name="email"
                className="inputEmail"
                type="email"
                placeholder=" "
                aria-label="Your Email"
              />
              <label htmlFor="email" className="emailLabel">Email</label>
            </div>

            <div className="descriptionWrapper">
              <textarea
                required
                name="message"
                className="inputDescription"
                placeholder=" "
                rows="7"
                aria-label="Your Message"
              />
              <label htmlFor="description" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>

          <div className="contact__content__form__submit">
            <motion.button
              type="submit"
              className="submitButton"
              disabled={loading}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: loading ? 1 : 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {loading ? "Mengirim..." : "Submit"}
            </motion.button>
          </div>
        </motion.form>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </motion.section>
  );
};

export default Contact;
