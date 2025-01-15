// JobsPage.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import FlashCard from "../components/common/FlashCard.jsx"; 
import axios from "axios";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({ keyword: "", location: "", company: "" });

  useEffect(() => {
    // API'den iş ilanlarını çek
    axios
      .get("http://localhost:8001/api/v1/job/get")
      .then((response) => {
        setJobs(response.data.jobs);
        setFilteredJobs(response.data.jobs);
      })
      .catch((error) => {
        console.error("İş ilanları alınamadı:", error);
        alert("İş ilanları yüklenirken bir hata oluştu.");
      });
  }, []);

  const handleApply = (jobId) => {
    axios
      .post(`http://localhost:8001/api/v1/application/apply/${jobId}`)
      .then(() => alert("Başvurunuz alındı!"))
      .catch(() => alert("Başvuru yapılamadı! Lütfen tekrar deneyin."));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let updatedJobs = jobs;

    if (filters.keyword) {
      updatedJobs = updatedJobs.filter((job) =>
        job.title.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    if (filters.location) {
      updatedJobs = updatedJobs.filter((job) =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.company) {
      updatedJobs = updatedJobs.filter((job) =>
        job.company.toLowerCase().includes(filters.company.toLowerCase())
      );
    }

    setFilteredJobs(updatedJobs);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
      <Navbar />
      <div className="flex flex-col md:flex-row pt-20 px-8 md:px-16">
        {/* Filtreleme Kısmı */}
        <div className="w-full md:w-1/4 bg-white text-black p-6 rounded shadow-md mb-6 md:mb-0 md:mr-6">
          <h2 className="text-xl font-bold mb-4">Filtreleme</h2>

          <div className="mb-4">
            <label htmlFor="keyword" className="block text-gray-700 font-medium mb-2">
              Anahtar Kelime
            </label>
            <input
              type="text"
              id="keyword"
              name="keyword"
              value={filters.keyword}
              onChange={handleFilterChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Pozisyon veya yetenek"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
              Konum
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Şehir veya ülke"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
              Şirket
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={filters.company}
              onChange={handleFilterChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Şirket adı"
            />
          </div>

          <button
            onClick={applyFilters}
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
          >
            Filtreleri Uygula
          </button>
        </div>

        {/* İş İlanları */}
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-6">İş İlanları</h1>
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <FlashCard key={job.id} job={job} handleApply={handleApply} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg mt-10">
              Henüz bir iş ilanı bulunamadı.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
