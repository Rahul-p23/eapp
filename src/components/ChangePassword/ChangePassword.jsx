import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    alert("Password changed successfully (demo only)");
  };

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="w-full max-w-md bg-dark2 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-400 mb-6">
          Change Password
        </h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-light mb-2">
              Current Password
            </label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-3 border border-dark rounded-lg bg-dark text-light focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter current password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-light mb-2">
              New Password
            </label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 border border-dark rounded-lg bg-dark text-light focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-light mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-dark rounded-lg bg-dark text-light focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Confirm new password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-green-500 transition duration-300"
          >
            Change Password
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

export default ChangePassword;