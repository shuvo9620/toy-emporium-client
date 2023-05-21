import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut().then(() => { }).catch(error => console.error(error));
    };

    return (
        <nav className="bg-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <img className="h-8 w-auto" src={logo} alt="Logo" />
                        </Link>
                        <Link
                            to="/"
                            className="hidden md:block text-white text-lg pl-8 font-bold"
                        >
                            TOY EMPORIUM
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <Link
                                to="/"
                                className="text-white px-4 hover:text-gray-300"
                            >
                                Home
                            </Link>
                            <Link
                                to="/toylist"
                                className="text-white px-4 hover:text-gray-300"
                            >
                                All Toys
                            </Link>
                            {user && (
                                <>
                                    <Link
                                        to="/myToys"
                                        className="text-white px-4 hover:text-gray-300"
                                    >
                                        My Toys
                                    </Link>
                                    <Link
                                        to="/addatoy"
                                        className="text-white px-4 hover:text-gray-300"
                                    >
                                        Add A Toy
                                    </Link>
                                </>
                            )}
                            <Link
                                to="/blogs"
                                className="text-white px-4 hover:text-gray-300"
                            >
                                Blogs
                            </Link>
                        </div>
                        <div className="flex items-center">
                            {user ? (
                                <>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={user.photoURL}
                                        title={user.displayName}
                                    />
                                    <button
                                        onClick={handleLogOut}
                                        className="ml-4 px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-600"
                                    >
                                        Log Out
                                    </button>
                                </>
                            ) : (
                                <Link to="/login">
                                    <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white"
                            >
                                <svg
                                    className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } md:hidden bg-gray-800`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
                    >
                        Home
                    </Link>
                    <Link
                        to="/toylist"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
                    >
                        All Toys
                    </Link>
                    {user && (
                        <>
                            <Link
                                to="/myToys"
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
                            >
                                My Toys
                            </Link>
                            <Link
                                to="/addatoy"
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
                            >
                                Add A Toy
                            </Link>
                        </>
                    )}
                    <Link
                        to="/blogs"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
                    >
                        Blogs
                    </Link>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                        {user ? (
                            <>
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={user.photoURL}
                                        alt={user.displayName}
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none text-white">
                                        {user.displayName}
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogOut}
                                    className="ml-auto bg-gray-800 flex-shrink-0 px-4 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <Link to="/login">
                                <button className="bg-blue-600 flex-shrink-0 px-4 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
