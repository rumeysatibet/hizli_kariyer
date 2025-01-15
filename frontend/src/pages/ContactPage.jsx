import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Navigate için eklendi

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Ana menüye dönüş için

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8001/api/v1/contact", formData);
      setSuccessMessage("Mesajınız başarıyla gönderildi!");
      setErrorMessage("");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Mesaj gönderim hatası:", error);
      setSuccessMessage("");
      setErrorMessage("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
        İletişim
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            İsim
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Adınızı girin"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Email adresinizi girin"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold"
          >
            Mesaj
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Mesajınızı yazın"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 mb-4"
        >
          Gönder
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"
        >
          Ana Menüye Dön
        </button>
      </form>
      {successMessage && (
        <p className="text-green-500 font-semibold mt-4">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-500 font-semibold mt-4">{errorMessage}</p>
      )}
    </div>
  );
};

export default ContactPage;
