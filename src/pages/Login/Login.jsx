import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
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
                    <input className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" type="submit" value="Login" />
                    <div className="text-center">
                        <span>Or sign in with:</span>
                        <div className="flex justify-center mt-2">
                            {/* Google Sign-in */}
                        </div>
                    </div>
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
