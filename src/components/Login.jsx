import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiBaseUrl}/login`, {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
    } catch (err) {
      setMessage( (err.message));
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md w-full"
    >
      <h2 className="text-xl font-semibold text-purple-700 mb-4 text-center">Log In</h2>

      {message && (
        <p className={`mb-3 text-sm text-center font-medium ${message.startsWith("✅") ? "text-green-600" : "text-red-500"}`}>
          {message}
        </p>
      )}

      <div className="mb-3">
        <label htmlFor="email" className="block mb-1 text-sm text-left text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-sm text-left text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white text-sm font-medium rounded-lg transition"
      >
        Log In
      </button>
    </form>
  );
};

export default Login;
