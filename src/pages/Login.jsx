import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { sanitizeInput } from "../constants/sanitizeInput";
import FormInput from "../components/FormInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);

    try {
      await login(sanitizedEmail, sanitizedPassword);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#01AFD1] to-[#4dd0e1]">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <FormInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#01AFD1] hover:bg-[#4dd0e1] text-white font-bold py-3 px-4 rounded-full transition duration-300"
          >
            Sign In
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
        <p className="text-center mt-4 text-gray-800">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#01AFD1] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
