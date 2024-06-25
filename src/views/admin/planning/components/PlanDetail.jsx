import React, { useState, useEffect } from 'react';
import Card from "components/card";
import { useParams } from 'react-router-dom';
import noData from "assets/img/transaction/noData.png";
import Modal from 'components/modal/Modal';
import tableDataComplex from '../variables/tableDataComplex.json'; // Import JSON data

const EventDetail = () => {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        category: '',
        amount: ''
    });

    useEffect(() => {
        // Find event data by id
        const event = tableDataComplex.find(event => event.id === id);
        setEventData(event);
    }, [id, tableDataComplex]);

    if (!eventData) {
        return <div>Loading...</div>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server or update the state
        console.log(formData);
        setIsModalOpen(false);
        // Reset form data
        setFormData({
            category: '',
            amount: ''
        });
    };

    return (
        <div className="flex w-full flex-col items-center mt-5">
            <div className="w-full max-w-12xl bg-white p-5 rounded-lg shadow-lg" >
                <div className="w-full mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">

                <div className="col-span-12 lg:!mb-0">
                <Card extra={"w-full h-full p-3"}>
                    {/* Header */}
                    <div className="mt-2 w-full">
                        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                        Event Detail
                        </h4>
                        <div className="mt-3 mb-4 border-b border-gray-50 w-full"></div>
                    </div>
                    {/* Details */}
                    <div className="px-2 mb-8">
                        <div className="mb-4 flex items-center">
                        <p className="text-sm font-bold text-navy-700 mr-2">Event name:</p>
                        <p className="text-base text-gray-600 dark:text-white">{eventData.event}</p>
                        </div>
                        <div className="mb-4 flex items-center">
                        <p className="text-sm font-bold text-navy-700 mr-2">Event status:</p>
                        <p className="text-base text-gray-600 dark:text-white">{eventData.status}</p>
                        </div>
                        <div className="mb-4 flex items-center">
                        <p className="text-sm font-bold text-navy-700 mr-2">Time range:</p>
                        <p className="text-base text-gray-600 dark:text-white">{eventData["time range"]}</p>
                        </div>
                    </div>
                    </Card>
                </div>

                <div className="col-span-12 lg:!mb-0">
                    <Card>
                    <div className="grid grid-cols-2 gap-12 p-4">
                        <div className="flex flex-col gap-2">
                            <h3><strong>Budget</strong></h3>
                            <div className="p-3 border border-gray-200 rounded-md min-w-fit">
                                <p className="text-lg font-bold text-navy-700">Rp{eventData.budget.toLocaleString()}</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    </Card>
                </div>

                {/* Expense */}
                <div className="col-span-12 lg:!mb-0">
                    <Card extra={"w-full h-full p-3"}>
                    <h4 className="text-lg font-bold text-navy-700 dark:text-white">Expense</h4>
                        <div className=" grid lg:grid-cols-3 items-center gap-4 justify-center">
                            <div>
                                <div className="border border-gray-200 rounded-md p-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-gray-600 text-sm">Heading</p>
                                            <p className="text-navy-700 text-lg font-bold">{eventData.budget / 5}</p>
                                        </div>
                                        <button 
                                        onClick={() => setIsModalOpen(true)} 
                                        className="px-4 py-1 text-md font-medium text-brand-500 border border-brand-500 hover:bg-brand-500 hover:text-white rounded-md">
                                        Adjust
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border border-gray-200 rounded-md p-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-gray-600 text-sm">Heading</p>
                                            <p className="text-navy-700 text-lg font-bold">{eventData.budget / 5}</p>
                                        </div>
                                        <button 
                                        onClick={() => setIsModalOpen(true)} 
                                        className="px-4 py-1 text-md font-medium text-brand-500 border border-brand-500 hover:bg-brand-500 hover:text-white rounded-md">
                                        Adjust
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                </div>
            </div>

            {/* Modal */}
        {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-gray-700">Category Name</label>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-500"
                    required
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">Adjust Amount</label>
                <input
                    type="text"
                    name="organizer"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-500"
                    required
                />
                </div>
                <div className="flex justify-end space-x-2">
                <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-brand-500 border border-brand-500 rounded-md hover:bg-brand-600"
                >
                    Save
                </button>
                </div>
            </form>
        </Modal>
        )}
        </div>

    

    );
};

export default EventDetail;
