// Updated FlashCard.jsx
import React from "react";
import PropTypes from "prop-types";

const FlashCard = ({ job, handleApply }) => {
  if (!job) {
    return (
      <div className="bg-red-500 text-white rounded shadow-lg p-6">
        <p>İş bilgisi yüklenemedi. Lütfen tekrar deneyin.</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 rounded shadow-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <p className="font-medium text-sm mb-2">Lokasyon: {job.location || "Belirtilmedi"}</p>
      <p className="font-medium text-sm mb-4">Maaş: {job.salary ? `${job.salary} TL` : "Belirtilmedi"}</p>
      <button
        onClick={() => handleApply(job.id)}
        className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded transition"
      >
        Başvur
      </button>
    </div>
  );
};

FlashCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    location: PropTypes.string,
    salary: PropTypes.number,
  }),
  handleApply: PropTypes.func.isRequired,
};

FlashCard.defaultProps = {
  job: {
    description: "Bilgi bulunamadı.",
    location: "Belirtilmedi",
    salary: null,
  },
};

export default FlashCard;