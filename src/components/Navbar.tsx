import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 z-10 p-4 sticky top-0">
            <div className="container mx-auto sm:flex justify-between items-center">
                {/* Left side of the navbar (Brand/logo) */}
                <div className="flex items-center justify-center">
                    <Link className='flex justify-center items-center' to="/">
                        <img src="https://img.freepik.com/free-vector/colorful-letter-s-with-black-background_483537-4543.jpg" alt="Logo" className="h-8 duration-150 hover:scale-125 mr-2 rounded-3xl" />
                        <span className="text-white text-2xl font-semibold hover:text-purple-500 duration-150"> <span className="text-green-400 text-3xl font-serif font-extrabold" >S</span>ahith</span>
                    </Link>
                </div> 

                {/* Right side of the navbar (Nav links and logos) */}
                <div className="flex items-center justify-center gap-4">

                    <Link className="text-white mr-4 hover:scale-90 duration-200 hover:text-green-400  " to="/">Home</Link>
                    <Link className="text-white mr-4 hover:scale-90 duration-200 hover:text-green-400 " to="/about">About</Link>
                    <Link className="text-white mr-4 hover:scale-90 duration-200 hover:text-green-400 " to="/contact">Contact</Link>

                    <Link to="https://github.com/sahith29s" target='_sahith'>
                        <FontAwesomeIcon icon={faGithub} color='white' className="h-5 hover:opacity-70 duration-150 hover:scale-90" />
                    </Link>

                    <Link to="/">
                        <FontAwesomeIcon icon={faLinkedin} color='white' className="h-5 hover:opacity-70 duration-150 hover:scale-90" />
                    </Link>

                    <Link to="/">
                        <FontAwesomeIcon icon={faDiscord} color="white" className="h-5 hover:opacity-70 duration-150 hover:scale-90" />
                    </Link>

                    <Link target="_sahith" to="https://www.chess.com/member/itsmesahith">
                        <FontAwesomeIcon icon={faChessQueen} color="white" className="h-5 hover:opacity-70 duration-150 hover:scale-90" />
                    </Link>

                </div>
            </div>

        </nav>
    );
};

export default Navbar;
