import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (

        <footer>
            <div className='bg-slate-100 p-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div >
                        <h1 className="text-xl font-bold">Bandage</h1>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-500">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="text-blue-500">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="text-blue-500">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6 p-4 md:flex-row justify-between items-center">
                <div>
                    <h2 className="font-semibold mb-2 text-gray-700">Company Info</h2>
                    <ul>
                        <li><a href="#" className="block py-1 text-gray-700">About Us</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">Carrier</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">We are hiring</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-2">Legal</h2>
                    <ul>
                        <li><a href="#" className="block py-1 text-gray-700">About Us</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">Carrier</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">We are hiring</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-2">Features</h2>
                    <ul>
                        <li><a href="#" className="block py-1 text-gray-700">Business Marketing</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">User Analytic</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">Live Chat</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">Unlimited Support</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-2">Resources</h2>
                    <ul>
                        <li><a href="#" className="block py-1 text-gray-700">IOS & Android</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">Watch a Demo</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">Customers</a></li>
                        <li><a href="#" className="block py-1 text-gray-700">API</a></li>
                    </ul>
                </div>
                <div>
                <h2 className="font-semibold mb-2">Get In Touch</h2>
                <div className="flex mb-2">
                    <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded-l-md flex-1" />
                    <button className="p-2 bg-blue-500 text-white rounded-r-md">Subscribe</button>
                </div>
                <p className="text-gray-500 text-sm">Lorem imp sum dolor Amit</p>
                </div>
            </div>
            <div className='bg-slate-100 p-4 mt-8 text-center text-gray-500 text-sm'>
            Made With Love By Finland All Right Reserved
            </div>
        </footer>

    )
}