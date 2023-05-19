import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Registration = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [photoURL, setPhotoURL] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
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
                    <div>
                        <input type="submit" value="Register" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" />
                    </div>
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
