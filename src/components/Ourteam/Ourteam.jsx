

import React from "react";
import { Link } from "react-router-dom";
import pic2 from "../../assets/pic-2.jpg";
import pic3 from "../../assets/pic-3.jpg";
import pic4 from "../../assets/pic-4.jpg";
import pic5 from "../../assets/pic-5.jpg";
import pic6 from "../../assets/pic-6.jpg";
import pic7 from "../../assets/pic-7.jpg";
import pic8 from "../../assets/pic-8.jpg";

const Teachers = [
  { img: pic2, name: "Teacher 1", role: "Developer" },
  { img: pic3, name: "Teacher 2", role: "Developer" },
  { img: pic4, name: "Teacher 3", role: "Developer" },
  { img: pic5, name: "Teacher 4", role: "Developer" },
  { img: pic6, name: "Teacher 5", role: "Developer" },
  { img: pic7, name: "Teacher 6", role: "Developer" },
  { img: pic8, name: "Teacher 7", role: "Developer" },
];

const OurTeam = () => {
  return (
    <section className="our-team p-6 md:p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-3xl font-bold text-green-400 mb-6">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <div className="teacher-card bg-gray-800 p-4 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-green-400 mb-4">Become a Tutor</h3>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque ipsam fuga ex
            et aliquam.
          </p>
          <a
            href="/register"
            className="inline-block bg-green-400 text-black py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            Get Started
          </a>
        </div>

        {Teachers.map((teacher, index) => (
          <div
            key={index}
            className="teacher-card bg-gray-800 p-4 rounded-lg shadow-lg text-center"
          >
            <img
              src={teacher.img}
              alt={teacher.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
            />
            <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
            <p className="text-gray-300">{teacher.role}</p>
            <Link
              to={`/teacher/${index + 1}`}
              className="text-green-400 hover:underline mt-2 inline-block"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;