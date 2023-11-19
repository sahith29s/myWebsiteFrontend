import { useState } from "react";

interface propsInterface {
    setName: React.Dispatch<React.SetStateAction<string>>
}

const PopupForName = ({ setName }: propsInterface) => {

    const [popState, setPopState] = useState("");

    // Generate a random 4-digit number
    function generateRandom4DigitNumber() {
        // Math.floor(Math.random() * (max - min + 1)) + min
        const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        return String(randomNumber)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        let randomNumber: string = generateRandom4DigitNumber();
        e.preventDefault();
        setName(popState + randomNumber);
        localStorage.setItem("name" , popState + randomNumber);

    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h1 className="text-2xl font-semibold mb-4">Welcome!</h1>
                <p className="text-gray-600 mb-6">Please enter your name:</p>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={popState}
                            onChange={(e) => setPopState(e.target.value)}
                            name="name"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupForName;
