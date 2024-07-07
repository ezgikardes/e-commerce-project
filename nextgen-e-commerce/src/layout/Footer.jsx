import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (

        <footer>
            <div className='bg-[#FAFAFA] p-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div >
                        <h1 className="text-xl font-bold text-[#252B42]">Bandage</h1>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-[#23A6F0]">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="text-[#23A6F0]">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="text-[#23A6F0]">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6 p-4">
                <div>
                    <h2 className="font-semibold mb-2 text-[#252B42]">Company Info</h2>
                    <ul>
                        <li><a href="#" className="block py-1 text-[#737373]">About Us</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">Carrier</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">We are hiring</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-2 text-[#252B42]">Legal</h2>
                    <ul>
                        <li><a href="#" className="block py-1 text-[#737373]">About Us</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">Carrier</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">We are hiring</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-2 text-[#252B42]">Features</h2>
                    <ul>
                        <li><a href="#" className="block py-1 text-[#737373]">Business Marketing</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">User Analytic</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">Live Chat</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">Unlimited Support</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-2 text-[#252B42]">Resources</h2>
                    <ul>
                        <li><a href="#" className="block py-1 text-[#737373]">IOS & Android</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">Watch a Demo</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">Customers</a></li>
                        <li><a href="#" className="block py-1 text-[#737373]">API</a></li>
                    </ul>
                </div>
                <div>
                <h2 className="font-semibold mb-2 text-[#252B42]">Get In Touch</h2>
                <div className="flex mb-2">
                    <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded-l-md flex-1" />
                    <button className="p-2 bg-[#23A6F0] border border-[#E6E6E6] text-[#FFFFFF] rounded-r-md">Subscribe</button>
                </div>
                <p className="text-[#737373] text-sm">Lorem imp sum dolor Amit</p>
                </div> 
            </div>
            <div className='bg-[#FAFAFA] p-4 mt-8 text-center text-[#737373] text-sm'>
            Made With Love By Finland All Right Reserved
            </div>
        </footer>

    )
}