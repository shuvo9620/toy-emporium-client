import { useContext } from 'react';
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <nav className="flex items-center justify-between bg-gray-700 p-4">
            <div className="flex items-center">
                <Link to='/'><img style={{ 'height': '15vh' }} src={logo} alt="" /></Link>
                <Link to='/' className="text-white text-lg ps-96 font-bold">TOY EMPORIUM</Link>
            </div>
            <div className="flex items-center">
                <Link to='/' className="text-white px-4 hover:text-gray-300">Home</Link>
                <Link to="/toys" className="text-white px-4 hover:text-gray-300">All Toys</Link>
                {user && (
                    <Link to="/my-toys" className="text-white px-4 hover:text-gray-300">My Toys</Link>
                )}
                {user && (
                    <Link to="/add-toy" className="text-white px-4 hover:text-gray-300">Add A Toy</Link>
                )}
                <Link to="/blogs" className="text-white px-4 hover:text-gray-300">Blogs</Link>
                <div className='flex items-center'>
                    {
                        user ? <>
                            <img style={{ height: '40px' }} src={user.photoURL} title={user.displayName} className='rounded' alt="" />
                            <button onClick={handleLogOut} className='ms-4 btn btn-secondary'>Log out</button>
                        </>
                            :
                            <Link to='/login'>
                                <button className='btn btn-primary'>Login</button>
                            </Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
