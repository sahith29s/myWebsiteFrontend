import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                type="button"
                
                className="text-white h-[3rem] bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 font-amita mt-5 mb-2"

                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
            >
            Web apps that you can use
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    {/* Dropdown content goes here */}
                    <div className="py-1">
                        <Link
                            to="/chat"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Chat App
                        </Link>

                        <Link
                            to="/"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            Option 2
                        </Link>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
