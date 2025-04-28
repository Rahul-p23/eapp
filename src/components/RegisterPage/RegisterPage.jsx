import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registration successful! Redirecting to the playlist page...");
    navigate("/playlist");
  };

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-lg bg-dark2 rounded-2xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-green-400 mb-8">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-light mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-dark rounded-lg bg-dark text-light focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Zanzrukiya Rahul"
            />
          </div>
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
              placeholder="rahulp23@gmail.com"
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
          <div>
            <label className="block text-sm font-medium text-light mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-dark rounded-lg bg-dark text-light focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-green-500 transition duration-300"
          >
            Register
          </button>
        </form>
        <button
          onClick={handleBack}
          className="w-full mt-4 bg-secondary text-light font-bold py-3 rounded-lg hover:bg-dark transition duration-300"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;