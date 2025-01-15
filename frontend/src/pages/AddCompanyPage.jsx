import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/common/Navbar";

const AddCompanyPage = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    salary: "",
    requirements: "",
    experience: "",
    jobType: "Full Time",
  });

  const handleJobChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // İş bilgilerini kaydet
      const jobResponse = await axios.post(
        "http://localhost:8001/api/v1/job/post",
        jobData
      );
      console.log("Job Response:", jobResponse.data);

      alert("İş bilgileri başarıyla kaydedildi!");
    } catch (error) {
      console.error("Hata:", error);
      alert("Bilgiler kaydedilirken bir hata oluştu.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-2xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">
            İş Bilgisi Ekle
          </h2>

          {/* İş Bilgileri */}
          <div>
            <h3 className="font-bold text-lg mb-2">İş Bilgileri</h3>
            <input
              type="text"
              name="title"
              placeholder="İş Başlığı"
              value={jobData.title}
              onChange={handleJobChange}
              className="w-full p-3 border border-gray-300 rounded text-black"
              required
            />
            <textarea
              name="description"
              placeholder="İş Açıklaması"
              value={jobData.description}
              onChange={handleJobChange}
              className="w-full p-3 border border-gray-300 rounded text-black mt-2"
              rows="3"
              required
            />
            <input
              type="text"
              name="salary"
              placeholder="Maaş"
              value={jobData.salary}
              onChange={handleJobChange}
              className="w-full p-3 border border-gray-300 rounded text-black mt-2"
              required
            />
            <textarea
              name="requirements"
              placeholder="Gereklilikler"
              value={jobData.requirements}
              onChange={handleJobChange}
              className="w-full p-3 border border-gray-300 rounded text-black mt-2"
              rows="3"
              required
            />
            <input
              type="text"
              name="experience"
              placeholder="Deneyim (Yıl)"
              value={jobData.experience}
              onChange={handleJobChange}
              className="w-full p-3 border border-gray-300 rounded text-black mt-2"
              required
            />
            <select
              name="jobType"
              value={jobData.jobType}
              onChange={handleJobChange}
              className="w-full p-3 border border-gray-300 rounded text-black mt-2"
              required
            >
              <option value="Full Time">Tam Zamanlı</option>
              <option value="Part Time">Yarı Zamanlı</option>
              <option value="Contract">Sözleşmeli</option>
              <option value="Internship">Stajyer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white p-3 rounded hover:bg-purple-700 transition"
          >
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCompanyPage;
