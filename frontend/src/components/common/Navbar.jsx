import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md text-white">
      {/* Logo Section */}
      <Link to="/" className="text-3xl font-extrabold flex items-center">
        <span className="mr-2">HızlıKariyer</span>
        <span role="img" aria-label="job" className="text-4xl">📄</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 font-medium">
        <Link
          to="/"
          className="hover:underline underline-offset-4 decoration-indigo-300 transition"
        >
          Anasayfa
        </Link>
        <Link
          to="/jobs"
          className="hover:underline underline-offset-4 decoration-indigo-300 transition"
        >
          İş İlanları
        </Link>
        <Link
          to="/contact"
          className="hover:underline underline-offset-4 decoration-indigo-300 transition"
        >
          İletişim
        </Link>
        <Link
          to="/login"
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Giriş Yap
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 w-48 bg-white shadow-lg rounded-lg py-4 px-6 space-y-4 text-gray-800 md:hidden">
          <Link
            to="/"
            className="block hover:text-purple-600 transition font-medium"
          >
            Anasayfa
          </Link>
          <Link
            to="/jobs"
            className="block hover:text-purple-600 transition font-medium"
          >
            İş İlanları
          </Link>
          <Link
            to="/contact"
            className="block hover:text-purple-600 transition font-medium"
          >
            İletişim
          </Link>
          <Link
            to="/login"
            className="block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Giriş Yap
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
