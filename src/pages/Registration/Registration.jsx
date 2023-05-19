import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const handleRegistration = () => {

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-bold mb-4">Registration</h2>
                <form onSubmit={handleRegistration} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                        <input type="text" placeholder='Your Email' id="name" name='name' className="w-full input input-bordered border-gray-300 rounded-md p-2" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                        <input type="email" placeholder='Your Name' name='email' id="email" className="w-full input input-bordered border-gray-300 rounded-md p-2" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium">Password</label>
                        <input type="password" placeholder='Your Password' id="password" name='password' className="w-full input input-bordered border-gray-300 rounded-md p-2" />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="block mb-1 font-medium">Photo URL</label>
                        <input type="text" placeholder='Your photo url' name='photo' id="photoURL" className="w-full input input-bordered border-gray-300 rounded-md p-2" />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Register
                    </button>
                    <div className="text-center">
                        <span>Already have an account? </span>
                        <Link to="/login" className="text-blue-800 font-bold hover:underline">Please Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
