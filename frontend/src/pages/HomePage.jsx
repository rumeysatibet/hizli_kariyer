import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600 flex flex-col items-center justify-start">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white/80 backdrop-blur-md fixed top-0 z-10 shadow-md">
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="font-bold text-lg md:text-2xl text-purple-700">
            HızlıKariyer
          </span>
          <span className="text-3xl md:text-5xl" role="img" aria-label="job">
            📄
          </span>
        </div>
        <div className="hidden md:flex space-x-4 md:space-x-8">
          <Link
            to="/login"
            className="px-4 py-2 rounded-full font-medium shadow-lg transform hover:scale-105 transition-all duration-200 bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
          >
            Giriş
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-full font-medium shadow-lg transform hover:scale-105 transition-all duration-200 bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
          >
            Kayıt Ol
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center flex-grow text-center px-4 mt-20 md:mt-28">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 drop-shadow-lg">
          Ara, Başvur &{" "}
          <span className="text-yellow-300">Hayalindeki İşi Bul</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center w-full max-w-xl mt-6 shadow-lg bg-white rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Hayalindeki işi bul"
            className="flex-grow px-4 py-3 text-base md:text-lg outline-none"
          />
          <button className="bg-purple-600 hover:bg-indigo-600 transition-colors text-white px-6 py-3 text-base md:text-lg">
            🔍
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-12 space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to="/"
            className="bg-white/80 text-purple-700 px-6 py-3 md:px-8 md:py-4 text-lg border border-purple-300 rounded-full font-semibold hover:bg-purple-200 transition-all duration-200 shadow"
          >
            Anasayfa
          </Link>
          <Link
            to="/jobs"
            className="bg-white/80 text-purple-700 px-6 py-3 md:px-8 md:py-4 text-lg border border-purple-300 rounded-full font-semibold hover:bg-purple-200 transition-all duration-200 shadow"
          >
            İşler
          </Link>
          <Link
            to="/contact"
            className="bg-white/80 text-purple-700 px-6 py-3 md:px-8 md:py-4 text-lg border border-purple-300 rounded-full font-semibold hover:bg-purple-200 transition-all duration-200 shadow"
          >
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
