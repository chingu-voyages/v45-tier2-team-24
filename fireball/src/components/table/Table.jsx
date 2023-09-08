import { selectClasses } from '@mui/material';
import { useEffect, useState } from 'react';

function DataTable({data, isOpen, setIsOpen, selectedMeteor}) {
  useEffect(() => {
    if (selectedMeteor != null) {
      setIsOpen(selectedMeteor.id);
    }
  }, [selectedMeteor, setIsOpen]);
  return (
    <div className="w-full mb-1">
      <button
        onClick={() => setIsOpen(isOpen === data.id ? null : data.id)}
        className="w-full bg-slate-700 text-white p-2 rounded-t-md hover:bg-stone-900 hover:text-cyan-300"
      >
        {data.name} | Mass: {data.mass} kg
      </button>
      {isOpen === data.id && (
        <div className="w-full bg-gray-100 bg-slate-50 p-4 ">
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Name Type:</strong> {data.nametype}</p>
          <p><strong>Mass:</strong> {data.mass} kg</p>
          <p><strong>Fall:</strong> {data.fall}</p>
          <p><strong>Date:</strong> {data.year?.slice(0,10)}</p>
          <p><strong>Latitude:</strong> {data.reclat}</p>
          <p><strong>Longitude:</strong> {data.reclong}</p>
        </div>
      )}
    </div>
  );
}

export default DataTable;