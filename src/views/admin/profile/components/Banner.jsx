import React from "react";
import avatar from "assets/img/avatars/avatar11.png";
import Card from "components/card";

const Banner = () => {
  return (
    <Card extra={"flex items-start w-full h-full p-4"}>
      {/* Profile Image and Name */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img className="h-20 w-20 rounded-full" src={avatar} alt="Jane Doe" style={{ borderRadius: '13px' }} />
          <button className="absolute -bottom-2 -right-2 bg-white p-2 hover:bg-gray-300 transition-colors shadow-lg" style={{ borderRadius: '10px' }}>
            <svg className="w-4 h-4 text-purple-600 hover:text-purple-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd"
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-bold text-navy-700">Jane Doe</h4>
          <p className="text-sm text-gray-600">janedoe@gmail.com</p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
