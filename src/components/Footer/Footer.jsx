import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-28 bg-primary text-light">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-accent">Code Journey</h1>
            <p className="text-secondary">
              TCJ is a platform dedicated to empowering aspiring developers.
              From beginner tutorials to advanced programming concepts, we
              provide a comprehensive learning experience designed to help you
              master coding skills, build projects, and launch your tech career.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-accent">Courses</h1>
              <div className="text-secondary">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-accent duration-200">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-accent duration-200">
                    Software Development
                  </li>
                  <li className="cursor-pointer hover:text-accent duration-200">
                    Apps Development
                  </li>
                  <li className="cursor-pointer hover:text-accent duration-200">
                    E-learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-accent">Links</h1>
              <div className="text-secondary">
                <ul className="space-y-2 text-lg">
                  <li>
                    <Link
                      to="/"
                      className="cursor-pointer hover:text-accent duration-200"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="cursor-pointer hover:text-accent duration-200"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="cursor-pointer hover:text-accent duration-200"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="cursor-pointer hover:text-accent duration-200"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-accent">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-secondary w-full py-4 focus:ring-0 focus:outline-none placeholder:text-light"
              />
              <button className="bg-accent text-black font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com">
                <FaWhatsapp className="cursor-pointer hover:text-accent hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram className="cursor-pointer hover:text-accent hover:scale-105 duration-200" />
              </a>
              <a href="https://www.google.com/">
                <TbWorldWww className="cursor-pointer hover:text-accent hover:scale-105 duration-200" />
              </a>
              <a href="https://www.youtube.com">
                <FaYoutube className="cursor-pointer hover:text-accent hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
