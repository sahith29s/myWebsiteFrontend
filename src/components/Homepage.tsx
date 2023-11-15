import { Link } from "react-router-dom";
import React from "react";
import photo from "../assets/photo.png";
import { TypeAnimation } from 'react-type-animation';

function Body() {
    return (
        <div className="items-center flex justify-around  text-center bg-whited">
            <div className="flex flex-col items-center mb-6">
                <img
                    className="h-[27rem] rounded-[50rem] mb-5 "
                    src={photo}
                    alt="Profile"
                />
                <h1 className="text-3xl font-bold text-gray-800 mt-4">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Sahith...",
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            "Student",
                            1000,
                        ]}
                        wrapper="span"
                        speed={8}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        className="text-purple-700"
                        repeat={Infinity}
                    />
                </h1>
            </div>
            <div className="text-left">
                <div className="text-[3rem]">Hey,</div>
                <div className="text-[3rem]">This is <span className="text-orange-500 ">Sahith</span></div>
                <div className="text-[3rem]">Into Tech? </div>

                <Link  to="/contact" type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contact</Link>
            </div>
        </div>
    );
}

export default Body