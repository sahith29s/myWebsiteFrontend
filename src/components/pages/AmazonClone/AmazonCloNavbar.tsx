import { faCartShopping, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const AmazonCloNavbar = () => {

    return (
        <>
            <nav className=" sm:flex hidden gap-10 px-10 justify-between text-white h-16 items-center bg-black">
                <div className="logo">
                    logo
                </div>
                <div className="searchbar flex">
                    <input type="text" className="h-10  rounded-xl w-[38.5vw] relative" />

                    <FontAwesomeIcon icon={faSearch} color="white" className="text-black absolute rounded-r-xl text-[1rem] left-[49.5vw] bg-orange-500 h-10 " />

                </div>
                <div className="signin">
                    <p className="text-sm">Hello, sign in</p>
                    <p className="font-bold">Account & Lists</p>
                </div>
                <div className="orders">
                    <p className="text-sm">Returns</p>
                    <p className="font-bold">& Orders</p>
                </div>
                <div className="cart">
                    <FontAwesomeIcon icon={faCartShopping} color="white" className="text-2xl mr-2" />
                    <span>cart</span>
                </div>
            </nav>

            <nav className="bg-slate-700 text-white">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <div className="hanburger">ham</div>
                        <div className="logo">logo</div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="signup">
                            <span>Sign up</span>
                            <FontAwesomeIcon icon={faUser} className="ml-1 text-2xl mr-2" />
                        </div>
                        <div className="cart">
                            <FontAwesomeIcon icon={faCartShopping} className="text-2xl mr-2" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AmazonCloNavbar