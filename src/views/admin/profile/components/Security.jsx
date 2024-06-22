import Card from "components/card";
import React from "react";

const Security = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Security
        </h4>
        <div className="mt-3 mb-4 border-b border-gray-50 w-full"></div>
      </div>
      {/* Password */}
      <div className="px-2 mb-8">
        <div className="mb-4 flex items-center">
          <p className="text-sm font-bold text-navy-700 mr-2">Password:</p>
          <p className="text-base text-gray-600 dark:text-white">*********</p>
        </div>
      </div>
      {/* Update Password Button */}
      <div className="flex justify-end px-2">
        <button className="rounded-lg border border-navy-700 px-4 py-2 text-navy-700 hover:bg-navy-700 hover:text-white transition"
          style={{
            width: '200px',
            padding: '0.5rem 1rem'
          }}
        >
          Update Password
        </button>
      </div>
    </Card>
  );
};

export default Security;