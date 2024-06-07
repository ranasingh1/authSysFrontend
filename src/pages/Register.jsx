import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import { Link } from "react-router-dom";
import { sanitizeInput } from "../constants/sanitizeInput";
import FormInput from "../components/FormInput";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (e) => {
    const sanitizedUsername = sanitizeInput(username);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);
    console.log(sanitizedEmail, sanitizedPassword, sanitizedUsername);
    e.preventDefault();
    try {
      setErrors([]);

      const response = await axios.post(`${BASE_URL}/api/v1/register`, {
        username: sanitizedUsername,
        email: sanitizedEmail,
        password: sanitizedPassword,
      });
      console.log(response);
      setRegistered(true);
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setErrors(error.response.data.errors);
      } else if (error.response.status === 409) {
        setErrors([{ msg: error.response.data.message }]);
      } else {
        setErrors([{ msg: "Registration failed. Please try again." }]);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Register
        </h2>
        {!registered && (
          <form onSubmit={handleSubmit}>
            <FormInput
              id="username"
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormInput
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Register
            </button>
          </form>
        )}
        {errors.length > 0 && (
          <ul className="mb-4 text-red-500">
            {errors.map((error, index) => (
              <li key={index}>
                {error.msg} {error.path}
              </li>
            ))}
          </ul>
        )}
        {registered && (
          <p className="text-center text-green-500 mb-4">
            Registration successful. Please{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              login
            </Link>
            .
          </p>
        )}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
