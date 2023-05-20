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
                        <p className="mt-4">123 Street, City, Country</p>
                        <p>Email: info@yourbrand.com</p>
                        <p>Phone: +1 234 5678</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Follow Us</h3>
                        <div className="flex mt-4">
                            <a href="#" className="mr-4"><i className="fab fa-facebook-f text-white"></i></a>
                            <a href="#" className="mr-4"><i className="fab fa-twitter text-white"></i></a>
                            <a href="#" className="mr-4"><i className="fab fa-instagram text-white"></i></a>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <p className="text-center text-sm">
                    &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
