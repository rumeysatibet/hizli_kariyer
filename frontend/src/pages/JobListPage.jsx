import React, { useState } from "react";
import FilterSection from "../components/filters/FilterSection";
import FlashCard from "../components/common/FlashCard";

const JobListPage = () => {
  const [jobs] = useState([
    { id: 1, title: "Frontend Developer", company: "Kırlangıç Yazılım", location: "İstanbul", salary: 45000 },
    { id: 2, title: "Backend Developer", company: "Kurt Yazılım", location: "Ankara", salary: 50000 },
  ]);

  const handleFilter = () => {
    console.log("Filtreleme işlemi");
  };

  const handleApply = (jobId) => {
    console.log(`Job ${jobId} başvuruldu!`);
  };

  return (
    <div className="flex">
      <aside className="w-1/4 p-6">
        <FilterSection onFilter={handleFilter} />
      </aside>
      <main className="w-3/4 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Tüm İşler</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <FlashCard key={job.id} job={job} onApply={handleApply} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobListPage;
