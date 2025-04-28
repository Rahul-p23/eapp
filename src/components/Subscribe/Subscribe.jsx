import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div style={bgStyle} className="absolute inset-0 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative container py-24 md:py-48 flex flex-col justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center space-y-6 lg:max-w-[430px] mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            450K+ Students are learning from us
          </h1>
          <p className="text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto minima.
          </p>
          <a
            href="#"
            className="bg-green-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-green-500 transition duration-300 inline-flex items-center gap-4 group"
          >
            Subscribe Now
            <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
