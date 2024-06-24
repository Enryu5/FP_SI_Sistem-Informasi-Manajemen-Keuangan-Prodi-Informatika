import React, { useState } from 'react';
import organizersData from 'views/admin/event/variables/tableDataComplex.json'; // Pastikan path menuju file JSON sudah benar

const DropdownButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Mengambil daftar organizer unik
    const organizers = organizersData.map(event => event.organizer[0]);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Select Organizer
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {organizers.map((organizer, index) => (
                            <button
                                key={index}
                                onClick={() => alert(`Selected Organizer: ${organizer}`)}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                            >
                                {organizer}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
