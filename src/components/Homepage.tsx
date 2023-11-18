import { Link } from "react-router-dom";
import photo from "../assets/photo.png";
import { TypeAnimation } from 'react-type-animation';
import Dropdown from "./Dropdown";

function Homepage() {
    return (
        <div className="items-center mb-5 sm:min-h-[100vh] sm:flex justify-around text-center">
            <div className="flex flex-col items-center mb-6">
                <img
                    className="sm:h-[27rem] h-[10rem] rounded-[50rem] mb-5"
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
                        className="text-purple-600 font-amita"
                        repeat={Infinity}
                    />
                </h1>
            </div>
            <div className="sm:text-left">
                <div className="text-[3rem] font-amita">Hey,</div>
                <div className="text-[3rem] font-amita">This is <span className="text-orange-500 ">Sahith</span></div>
                <div className="text-[3rem] font-amita">Into Tech? </div>

                {/* <Link to="/contact" type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 font-amita mt-5 mb-2">
                    Apps that I made

                </Link> */}

                <Dropdown/>
                
            </div>
        </div>
    );
}

export default Homepage