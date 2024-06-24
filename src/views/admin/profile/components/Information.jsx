import Card from "components/card";
import React from "react";

const Information = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Profile Information
        </h4>
        <div className="mt-3 mb-4 border-b border-gray-50 w-full"></div>
      </div>
      {/* Profile Details */}
      <div className="px-2 mb-8">
        <div className="mb-4 flex items-center">
          <p className="text-sm font-bold text-navy-700 mr-2">Full Name:</p>
          <p className="text-base text-gray-600 dark:text-white">Jane Doe</p>
        </div>
        <div className="mb-4 flex items-center">
          <p className="text-sm font-bold text-navy-700 mr-2">User ID:</p>
          <p className="text-base text-gray-600 dark:text-white">#12345AGHJBJX76</p>
        </div>
        <div className="mb-4 flex items-center">
          <p className="text-sm font-bold text-navy-700 mr-2">Role:</p>
          <p className="text-base text-gray-600 dark:text-white">Lecturer (Full time)</p>
        </div>
        <div className="mb-4 flex items-center">
          <p className="text-sm font-bold text-navy-700 mr-2">Mobile:</p>
          <p className="text-base text-gray-600 dark:text-white">(088) 123 1234 123</p>
        </div>
        <div className="mb-4 flex items-center">
          <p className="text-sm font-bold text-navy-700 mr-2">Email:</p>
          <p className="text-base text-gray-600 dark:text-white">janedoe@gmail.com</p>
        </div>
      </div>
      {/* Update Profile Button */}
      <div className="flex justify-end px-2">
        <button className="rounded-lg border border-navy-700 px-4 py-2 text-navy-700 hover:bg-navy-700 hover:text-white transition"
          style={{
            width: '200px',
            padding: '0.5rem 1rem'
          }}
        >
          Update Profile
        </button>
      </div>
    </Card>
  );
};

export default Information;