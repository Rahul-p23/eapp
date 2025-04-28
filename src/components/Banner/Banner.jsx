import React from "react";
import BannerPng from "../../assets/education.png";
import { FaBookReader, FaChalkboardTeacher, FaInfinity } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-5xl font-extrabold">
            Unlock Your Potential with Expert Guidance
          </h1>
          <p className="text-lg">
            Join our platform to access top-notch courses and resources for lifelong learning.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 bg-purple-700 p-4 rounded-lg shadow">
              <FaBookReader className="text-2xl text-yellow-300" />
              <p>10,000+ Courses</p>
            </div>
            <div className="flex items-center gap-4 bg-purple-700 p-4 rounded-lg shadow">
              <FaChalkboardTeacher className="text-2xl text-yellow-300" />
              <p>Expert Instructors</p>
            </div>
            <div className="flex items-center gap-4 bg-purple-700 p-4 rounded-lg shadow">
              <FaInfinity className="text-2xl text-yellow-300" />
              <p>Lifetime Access</p>
            </div>
          </div>
        </motion.div>
        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={BannerPng}
            alt="Education"
            className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
