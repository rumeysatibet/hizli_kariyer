import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Navigate için eklendi
import Navbar from "../components/common/Navbar";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "student", // Varsayılan değer "student"
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Yönlendirme için

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://hizli-kariyer-backend.onrender.com/api/v1/user/register", formData);

      console.log("API Response:", response.data);

      if (response.status === 201) {
        setSuccessMessage(response.data.message || "Kayıt başarılı! Giriş yapabilirsiniz.");
        setErrorMessage("");
        setFormData({
          fullname: "",
          email: "",
          phoneNumber: "",
          password: "",
          role: "student",
        });
        // Login sayfasına yönlendirme
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setErrorMessage("Beklenmeyen bir hata oluştu.");
      }
    } catch (error) {
      console.error("Hata Detayı:", error.response);
      setSuccessMessage("");
      setErrorMessage(
        error.response?.data?.message || "Kayıt sırasında bir hata oluştu."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">
            Kayıt Ol
          </h2>

          {/* Ad Soyad */}
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-gray-700 font-medium">
              Ad Soyad
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Telefon Numarası */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-medium">
              Telefon Numarası
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Şifre */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Rol Seçimi */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 font-medium">
              Rol
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="student">Öğrenci</option>
              <option value="recruiter">İşveren</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
          >
            Kayıt Ol
          </button>

          {successMessage && (
            <p className="mt-4 text-green-500 text-center">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
