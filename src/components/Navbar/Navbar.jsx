import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "/services" },
  { id: 3, title: "About Us", path: "/about" },
  { id: 4, title: "Our Team", path: "/ourteam" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-20 bg-gray-900 text-gray-400 shadow-md"
    >
      <div className="container py-6 flex justify-between items-center">
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl text-green-400">Let's Start Our Coding Journey</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <motion.li
                key={menu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menu.id * 0.1 }}
              >
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-4 hover:text-green-400 transition duration-200"
                >
                  {menu.title}
                </Link>
              </motion.li>
            ))}
            {!isLoggedIn && (
              <motion.button
                onClick={handleSignInClick}
                className="bg-green-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-green-500 transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                Sign In
              </motion.button>
            )}
          </ul>
        </div>

        <div className="lg:hidden">
          <IoMdMenu className="text-4xl text-gray-400" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
