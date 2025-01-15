import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://hizli-kariyer-backend.onrender.com/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");

        if (data.user.role === "recruiter") {
          navigate("/add-company");
        } else if (data.user.role === "student") {
          navigate("/jobs");
        }
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error connecting to API:", error);
      alert("API ile bağlantı kurulamadı.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Giriş Yap</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email girin"
                required
                className="w-full p-3 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Şifre */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Şifre:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre girin"
                required
                className="w-full p-3 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Rol Seçimi */}
            <div>
              <label htmlFor="role" className="block text-gray-700 font-medium mb-2">Rol:</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="student">Student</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>

            {/* Giriş Butonu */}
            <button
              type="submit"
              className="w-full bg-purple-500 text-white p-3 rounded hover:bg-purple-700 transition"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
