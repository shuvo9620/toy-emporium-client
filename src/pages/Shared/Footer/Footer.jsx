import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white px-16 py-16 mt-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="h-20 w-20 mr-2" />
                            <h2 className="text-3xl font-bold">Toy Emporium</h2>
                        </div>
                        <p className="mt-4">Discover endless joy and imagination at Toy Emporium.
                            We offer a curated selection of high-quality toys for all ages.
                            Find the perfect playmate today!</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <ul className="mt-4">
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Contact Us</h3>
                        <p className="mt-4">Pabna, Dhaka, Bangladesh</p>
                        <p>Email: info@toyemporium.com</p>
                        <p>Phone: +880 1645026688</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Follow Us</h3>
                        <div className="flex mt-4">
                            <a href="#" className="mr-4"><FaFacebook className="text-white" /></a>
                            <a href="#" className="mr-4"><FaTwitter className="text-white" /></a>
                            <a href="#" className="mr-4"><FaInstagram className="text-white" /></a>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <p className="text-center text-sm">
                     Toy Emporium &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
