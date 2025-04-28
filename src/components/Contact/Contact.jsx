import React from "react";
import contactImg from "../../assets/contact-img.svg";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully (demo only)");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact p-6 md:p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="row flex flex-col md:flex-row gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="image md:w-1/2"
        >
          <img src={contactImg} alt="Contact" className="w-full rounded-lg shadow-lg" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-green-400">Get in touch</h3>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            maxLength="50"
            className="box p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            maxLength="50"
            className="box p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="number"
            placeholder="Enter your number"
            name="number"
            required
            maxLength="50"
            className="box p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="msg"
            className="box p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your message"
            required
            maxLength="1000"
            cols="30"
            rows="5"
          ></textarea>
          <input
            type="submit"
            value="Send message"
            className="inline-btn bg-green-400 text-black py-2 px-4 rounded cursor-pointer hover:bg-green-500 transition duration-300"
          />
        </motion.form>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="box-container grid md:grid-cols-3 gap-6 mt-12"
      >
        <div className="box text-center p-4 border border-gray-600 rounded-lg shadow-lg bg-gray-800">
          <i className="fas fa-phone text-xl mb-2 text-green-400"></i>
          <h3 className="font-bold text-lg text-white">Phone Number</h3>
          <a href="tel:1234567890" className="block text-green-400 hover:underline">
            123-456-7890
          </a>
          <a href="tel:1112223333" className="block text-green-400 hover:underline">
            111-222-3333
          </a>
        </div>

        <div className="box text-center p-4 border border-gray-600 rounded-lg shadow-lg bg-gray-800">
          <i className="fas fa-envelope text-xl mb-2 text-green-400"></i>
          <h3 className="font-bold text-lg text-white">Email Address</h3>
          <a href="mailto:rahulzanzrukiya@gmail.com" className="block text-green-400 hover:underline">
            rahulzanzrukiya@gmail.com
          </a>
          <a href="mailto:rahulzanzrukiya@gmail.com" className="block text-green-400 hover:underline">
            rahulzanzrukiya@gmail.com
          </a>
        </div>

        <div className="box text-center p-4 border border-gray-600 rounded-lg shadow-lg bg-gray-800">
          <i className="fas fa-map-marker-alt text-xl mb-2 text-green-400"></i>
          <h3 className="font-bold text-lg text-white">Office Address</h3>
          <a href="#" className="block text-green-400 hover:underline">
            Flat no. 1, A-1 building, Thaltej, Ahemdabad, India
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
