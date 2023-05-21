import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const { signIn } = useContext(AuthContext);
    const { createUserByGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                navigate(from, { replace: true })
                setError('');
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })



    }

    const handleLoginByGoogle = () => {
        createUserByGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                navigate(from,{replace:true})
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                        <input type="email" placeholder='Your Email' name='email' id="email" className="w-full border-gray-300 input input-bordered rounded-md p-2" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium">Password</label>
                        <input type="password" placeholder='Your Password' name='password' id="password" className="w-full border-gray-300 input input-bordered rounded-md p-2" />
                    </div>
                    <div>
                        <input type="submit" value="Login" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" />
                    </div>
                    <div className="text-center">
                        <button onClick={handleLoginByGoogle} className='me-4 btn btn-active'>
                            <FontAwesomeIcon icon={faGoogle} />
                            <span className='ms-2'>Login in with Google</span>
                        </button>
                    </div>
                    <p className='text-red-600'>{error}</p>
                    <div className="text-center">
                        <span>Do not have an account? </span>
                        <Link to="/registration" className="text-blue-800 font-bold hover:underline">Register here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
