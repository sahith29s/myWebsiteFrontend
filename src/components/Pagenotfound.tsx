import { Link } from 'react-router-dom';

const Pagenotfound = () => {
    return (
        <div className="flex items-center justify-center h-[40vh] sm:h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-8">
                    Oops! The page you are looking for might be in another castle.
                </p>
                <p className="text-lg mb-8">
                    Go back to <Link to="/" className="underline">the home page</Link>.
                </p>
            </div>
        </div>
    );
};

export default Pagenotfound;
