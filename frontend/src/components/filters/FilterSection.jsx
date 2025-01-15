import React from "react";

const FilterSection = ({ onFilter }) => {
  return (
    <div className="filter-section bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">İşleri Filtrele</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Lokasyon</h3>
          <div className="space-y-2">
            <label><input type="checkbox" value="İstanbul" /> İstanbul</label>
            <label><input type="checkbox" value="Ankara" /> Ankara</label>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Endüstri</h3>
          <div className="space-y-2">
            <label><input type="checkbox" value="Mühendislik" /> Mühendislik</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
