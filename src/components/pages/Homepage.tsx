import Dropdown from '../justComponents/Dropdown';
import photo from "../../assets/photo.png";
import { TypeAnimation } from 'react-type-animation';

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
                            "Sahith...",
                            1000,
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
                <Dropdown />
            </div>

        </div>
    );
}

export default Homepage