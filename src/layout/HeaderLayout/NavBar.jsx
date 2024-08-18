import {Link} from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faCartShopping, faHeart, faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div>
            <header className="bg-white border-b p-2">
                
                <div className="px-4 py-2 flex justify-between">
                    
                    <div className="text-xl font-bold text-[#252B42]">Bandage</div>

                    <div className="md:hidden flex space-x-4">
                        <button><FontAwesomeIcon icon={faSearch} /></button>                    
                        <button><FontAwesomeIcon icon={faCartShopping} /></button>
                        <button onClick={toggleMenu} ><FontAwesomeIcon icon={faBars} /></button>
                    </div>

                    <nav className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col md:flex-row md:space-x-4 mt-2">
                            <li><a href="/" className="block text-[#737373] text-[14px]">Home</a></li>
                            <li><a href="/shop" className="block text-[#737373] text-[14px]">Shop<FontAwesomeIcon icon={faChevronDown} /></a></li>
                            <li><a href="#" className="block text-[#737373] text-[14px]">About</a></li>
                            <li><a href="#" className="block text-[#737373] text-[14px]">Blog</a></li>
                            <li><a href="#" className="block text-[#737373] text-[14px]">Contact</a></li>
                            <li><a href="#" className="block text-[#737373] text-[14px]">Pages</a></li>
                        </ul>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-[#23A6F0] text-[14px]"><FontAwesomeIcon icon={faUser} />  Login / Register</a>
                        <a href="#" className="text-[#23A6F0]"><FontAwesomeIcon icon={faSearch} /></a>
                        <a href="#" className="text-[#23A6F0]"><FontAwesomeIcon icon={faCartShopping} /></a>
                        <a href="#" className="text-[#23A6F0]"><FontAwesomeIcon icon={faHeart} /></a>
                    </div>
                </div>
                
            </header>
            <div className="flex flex-col items-center md:hidden">
                <Link to={"/"} className="block py-2 text-[#737373]">Home</Link>
                <Link to={"/product"} className="block py-2 text-[#737373]">Product</Link>
                <Link to={"/pricing"} className="block py-2 text-[#737373]">Pricing</Link>
                <Link to={"/contact"} className="block py-2 text-[#737373]">Contact</Link>
            </div>

        </div>
    )
}