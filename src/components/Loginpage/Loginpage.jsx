import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess();
      navigate("/playlist");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-lg bg-dark2 rounded-2xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-green-400 mb-8">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-light mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-dark rounded-lg bg-dark text-light focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="rahul23@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-light mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-dark rounded-lg bg-dark text-light focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-green-500 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 flex flex-col gap-4">
          <button
            onClick={handleBack}
            className="w-full bg-secondary text-light py-3 rounded-lg font-semibold hover:bg-dark transition duration-300"
          >
            Back 
          </button>
          <Link
            to="/change-password"
            className="w-full text-center bg-green-400 text-black font-bold py-3 rounded-lg hover:bg-green-500 transition duration-300"
          >
            Change Password
          </Link>
        </div>
        <p className="mt-6 text-center text-light">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-accent hover:underline hover:text-green-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
