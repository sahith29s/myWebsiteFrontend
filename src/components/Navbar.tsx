import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 sticky top-0">
            <div className="container mx-auto sm:flex justify-between items-center">
                {/* Left side of the navbar (Brand/logo) */}
                <div className="flex items-center justify-center">
                    <img src="/path/to/your/logo.png" alt="Logo" className="h-8 mr-2" />
                    <Link to="/">
                        <span className="text-white text-lg font-semibold">Sahith</span>
                    </Link>
                </div>

                {/* Right side of the navbar (Nav links and logos) */}
                <div className="flex items-center justify-center">

                    <Link className="text-white mr-4" to="/home">Home</Link>
                    <Link className="text-white mr-4" to="/aboutme">About</Link>
                    <Link className="text-white mr-4" to="/contact">Contact</Link>

                    <Link to="https://github.com/sahith29s" target='_sahith'>
                        <FontAwesomeIcon icon={faGithub} color='white' className="h-8 mx-5" />
                    </Link>

                    <Link to="/">
                        <FontAwesomeIcon icon={faLinkedin} color='white' className="h-8" />
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
