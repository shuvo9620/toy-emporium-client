import { useState } from 'react';
import logo from '../../../assets/images/logo.png'

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        setLoggedIn(true);
        setUsername('Shuvo');
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
    };

    const handleMouseEnter = () => {
        if (loggedIn) {
            document.getElementById('profile-name').style.display = 'block';
        }
    };

    const handleMouseLeave = () => {
        document.getElementById('profile-name').style.display = 'none';
    };

    return (
        <nav className="flex items-center justify-between bg-gray-800 p-4">
            <div className="flex items-center">
                <img style={{ 'height': '15vh' }} src={logo} alt="" />
                <span className="text-white text-lg font-bold">TOY EMPORIUM</span>
            </div>
            <div className="flex items-center">
                <a href="/" className="text-white px-4 hover:text-gray-300">Home</a>
                <a href="/toys" className="text-white px-4 hover:text-gray-300">All Toys</a>
                {loggedIn && (
                    <a href="/my-toys" className="text-white px-4 hover:text-gray-300">My Toys</a>
                )}
                {loggedIn && (
                    <a href="/add-toy" className="text-white px-4 hover:text-gray-300">Add A Toy</a>
                )}
                <a href="/blogs" className="text-white px-4 hover:text-gray-300">Blogs</a>
                {loggedIn ? (
                    <div className="flex items-center">
                        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                            <img src="/path/to/profile-picture.png" alt="Profile Picture" className="w-8 h-8 rounded-full cursor-pointer" />
                            {username && (
                                <span
                                    id="profile-name" className="absolute bottom-0 right-0 bg-white px-1 py-0.5 text-xs rounded-md hidden">
                                    {username}
                                </span>
                            )}
                        </div>
                        <button onClick={handleLogout} className="text-white ml-2" >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button onClick={handleLogin} className="text-white">
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
