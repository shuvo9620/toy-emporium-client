import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleRegistration = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password, name, photo)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserData(result.user, name, photo);
                setError('');
                form.reset();
                setSuccess('User created Successfully')
            })
            .catch(error => {
                setError(error.message);
            })

        //validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add one uppercase');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 Character long');
            return;
        }

    };

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('user profile updated');
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-bold mb-4">Registration</h2>
                <form onSubmit={handleRegistration} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                        <input type="text" placeholder='Your Email' id="name" name='name' className="w-full input input-bordered border-gray-300 rounded-md p-2" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                        <input type="email" placeholder='Your Name' name='email' id="email" className="w-full input input-bordered border-gray-300 rounded-md p-2" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium">Password</label>
                        <input type="password" placeholder='Your Password' id="password" name='password' className="w-full input input-bordered border-gray-300 rounded-md p-2" required />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="block mb-1 font-medium">Photo URL</label>
                        <input type="text" placeholder='Your photo url' name='photo' id="photoURL" className="w-full input input-bordered border-gray-300 rounded-md p-2" required />
                    </div>
                    <div>
                        <input type="submit" value="Register" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" />
                    </div>
                    <p className='text-red-600'>{error}</p>
                    <p className='text-green-500'>{success}</p>
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
