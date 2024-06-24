import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
    <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <button
        onClick={onClose}
        className="absolute top-0 right-0 p-2 text-gray-700 hover:text-gray-900"
        >
        &times;
        </button>
        {children}
    </div>
    </div>,
    document.body
);
};

export default Modal;
