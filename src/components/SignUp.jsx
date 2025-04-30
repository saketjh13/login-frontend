import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const apiBaseUrl = import.meta.env.VITE_API_URL;
  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post(`${apiBaseUrl}/signup`, {
        email,
        password,
      });
      setMessage("Sign Up Successful");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setMessage( error.message);
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="bg-white p-6 rounded-lg shadow-md w-full"
    >
      {message && (
        <div className="text-sm text-red-600 mb-4 text-center">{message}</div>
      )}

      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2 text-left">Email address</label>
        <input
          type="email"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2 text-left">Password</label>
        <input
          type="password"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2 text-left">Confirm Password</label>
        <input
          type="password"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Re-enter your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
      >
        Signup
      </button>
    </form>
  );
};

export default SignUp;
