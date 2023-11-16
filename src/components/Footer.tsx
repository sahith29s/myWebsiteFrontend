import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex  bg-gray-800 text-white  mx-auto px-5">
            <div className="container mx-auto py-8">
                <div className="flex justify-between items-center">
                    <div className="w-1/3">
                        <h3 className="text-2xl font-bold">Sahith</h3>
                        {/* <p>Web Developer & Designer</p> */}
                        {/* Add social media icons and links if applicable */}
                        <div className="flex space-x-4 mt-4">
                            <Link to="" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} color='white' className="sm:h-8 hover:opacity-70 duration-150 hover:scale-90" />
                            </Link>
                            <Link to="https://github.com/sahith29s" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} color='white' className="sm:h-8 hover:opacity-70 duration-150 hover:scale-90" />
                            </Link>

                            <Link to="https://www.instagram.com/proz_honey/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} color='white' className="sm:h-8 hover:opacity-70 duration-150 hover:scale-90" />

                            </Link>
                        </div>
                    </div>

                    <div className="w-2/3">
                        <ul className="sm:flex justify-end space-x-8">
                            <li>
                                <Link to="/" className="hover:text-gray-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-gray-400">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gray-400">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p>&copy; 2023 Sahith. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
