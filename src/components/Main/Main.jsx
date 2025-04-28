import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroPng from "../../assets/hero.png";
import { motion } from "framer-motion";

const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.5, delay },
  },
});

const Main = ({ onSignInClick }) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">
      <Navbar onSignInClick={onSignInClick} />
      <div className="container grid grid-cols-1 lg:grid-cols-3 min-h-[700px] items-center gap-8">
        {/* Main Image */}
        <div className="relative flex justify-center lg:col-span-2">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src={HeroPng}
            alt="Hero"
            className="w-full max-w-[450px] h-auto object-contain drop-shadow-lg"
          />
        </div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 lg:items-start lg:text-left text-center">
          <motion.h1
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-4xl lg:text-6xl font-extrabold leading-tight"
          >
            Learn <span className="text-green-400">Anything</span> Anytime
          </motion.h1>
          <motion.p
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
            className="text-lg text-gray-400 mt-4"
          >
            Access thousands of courses and tutorials to boost your skills and career.
          </motion.p>
          <motion.div
            variants={FadeUp(1)}
            initial="initial"
            animate="animate"
            className="mt-6"
          >
            <button
              onClick={onSignInClick}
              className="bg-green-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-green-500 transition duration-300"
            >
              Get Started
              <IoIosArrowRoundForward className="text-xl ml-2" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;
