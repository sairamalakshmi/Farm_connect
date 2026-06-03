import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      if (res.data.user.role === "farmer") {
        navigate("/farmer-dashboard");
      } else {
        navigate("/consumer-dashboard");
      }

    } catch (err) {
      console.log(err);
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-600">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;