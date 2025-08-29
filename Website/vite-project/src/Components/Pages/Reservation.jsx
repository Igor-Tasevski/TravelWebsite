import React, { useState } from 'react';

const Reservation = (destination) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    people: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation for ${destination.label} submitted!`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
     

      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}
          className="w-full p-2 border rounded" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange}
          className="w-full p-2 border rounded" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Number of People</label>
        <input type="number" name="people" value={formData.people} onChange={handleChange}
          className="w-full p-2 border rounded" required min="1" />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        Reserve
      </button>
    </form>
  );
};

export default Reservation;
