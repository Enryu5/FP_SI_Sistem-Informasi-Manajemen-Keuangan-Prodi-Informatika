import React, { useState, useEffect } from 'react';
import Card from "components/card";
import { useParams } from 'react-router-dom';
import noData from "assets/img/transaction/noData.png";
import tableDataComplex from '../variables/tableDataComplex.json'; // Import JSON data

const EventDetail = () => {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);
    const balance = (eventData?.budget || 0) + (eventData?.revenue || 0) - (eventData?.expense || 0);

    useEffect(() => {
        // Find event data by id
        const event = tableDataComplex.find(event => event.id === id);
        setEventData(event);
    }, [id, tableDataComplex]);

    if (!eventData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex w-full flex-col items-center mt-5">
            <div className="w-full max-w-12xl bg-white p-5 rounded-lg shadow-lg" >
                <div className="w-full mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
                <div className="col-span-12 lg:!mb-0">
                    <Card extra={"flex items-start w-full h-full p-4"}>
                    {/* Profile Image and Name */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                            <img className="h-20 w-20 rounded-full" src={eventData.organizer[2]} alt={eventData.organizer[1]} style={{ borderRadius: '13px' }} />
                            </div>
                            <div className="flex flex-col">
                            <h4 className="text-lg font-bold text-navy-700">{eventData.organizer[1]}</h4>
                            <p className="text-sm text-gray-600">{eventData.organizer[0]}</p>
                            </div>
                        </div>
                    </div>
                    </Card>
                </div>

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
                        <p className="text-sm font-bold text-navy-700 mr-2">Event Status:</p>
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
                        <div className="flex flex-col gap-2">
                            <h3><strong>Revenue</strong></h3>
                            <div className="p-3 border border-gray-200 rounded-md">
                                <p className="text-lg font-bold text-navy-700">Rp{eventData.revenue.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    </Card>
                </div>

                {/* Expense */}
                <div className="col-span-12 lg:!mb-0">
                    <Card extra={"w-full h-full p-3"}>
                    <h4 className="text-lg font-bold text-navy-700 dark:text-white">Expense</h4>
                        <div className="grid-cols-12 items-center gap-4 justify-center">
                            <div className="col-span-12 flex flex-col justify-center items-center py-16">
                                <img className="h-50 w-50" src={noData} alt="There's no data" />
                                <p className="text-base text-gray-600">The event has not made any movement. </p>
                                <p className="text-base text-gray-600">There's haven't been any planning made yet.</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Summary */}
                <div className="col-span-12 lg:!mb-0">
                <Card extra={"w-full h-full p-3"}>
                    {/* Header */}
                    <div className="mt-2 w-full">
                        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                        Summary
                        </h4>
                        <div className="mt-3 mb-4 border-b border-gray-50 w-full"></div>
                    </div>
                    {/* Details */}
                    <div className="px-2 mb-8 ml-auto">
                        <div className="mb-4 flex items-center">
                        <p className="text-lg font-medium text-navy-700 mr-6">Budget</p>
                        <p className="text-medium text-lg text-navy-700 dark:text-white ml">Rp{eventData.budget.toLocaleString()}</p>
                        </div>
                        <div className="mb-4 flex items-center">
                        <p className="text-lg font-medium text-navy-700 mr-6">Revenue:</p>
                        <p className="text-medium text-lg text-navy-700 dark:text-white">Rp{eventData.revenue.toLocaleString()}</p>
                        </div>
                        <div className="mb-4 flex items-center">
                        <p className="text-lg font-medium text-navy-700 mr-6">Revenue:</p>
                        <p className="text-medium text-lg text-navy-700 dark:text-white">-Rp{eventData.expense.toLocaleString()}</p>
                        </div>
                        <div className="mb-4 flex items-center">
                        <p className="text-xl font-bold text-navy-700 mr-6">Balance:</p>
                        <p className="text-bold text-2xl text-brand-500 dark:text-white">Rp{balance.toLocaleString()}</p>
                        </div>
                    </div>
                    </Card>
                </div>

            </div>
        </div>
    </div>

    );
};

export default EventDetail;
