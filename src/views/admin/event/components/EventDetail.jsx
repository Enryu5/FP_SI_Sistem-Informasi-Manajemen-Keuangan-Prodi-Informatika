import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tableDataComplex from '../variables/tableDataComplex.json'; // Import JSON data

const EventDetail = () => {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        // Find event data by id
        const event = tableDataComplex.find(event => event.id === id);
        setEventData(event);
    }, [id]);

    if (!eventData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="event-detail p-4 border rounded shadow-md">
            <h1 className="text-xl font-bold mb-4">{eventData.event}</h1>
            <div className="organizer flex items-center mb-4">
                <img 
                    src={eventData.organizer[1]} 
                    alt="Organizer" 
                    className="w-12 h-12 rounded-full mr-4"
                />
                <p>{eventData.organizer[0]}</p>
            </div>
            <p className="mb-4">
                <strong>Time Range:</strong> {eventData["time range"]}
            </p>
            <p className="mb-4">
                <strong>Budget:</strong> Rp{eventData.budget.toLocaleString()}
            </p>
            <p className="mb-4">
                <strong>Expense:</strong> Rp{eventData.expense.toLocaleString()}
            </p>
            <p className="mb-4">
                <strong>Status:</strong> {eventData.status}
            </p>
        </div>
    );
};

export default EventDetail;
