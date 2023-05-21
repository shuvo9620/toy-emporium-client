import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../hooks/useTitle";

const AddAToy = () => {
    useTitle('Add A Toy')
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const pictureUrl = form.pictureUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;

        const myData = {
            pictureUrl, name, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, description
        }


        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(info => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Doll added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    };
    return (
        <div className="max-w-lg mx-auto mb-6">
            <h2 className="text-2xl text-center mt-5 font-bold mb-4">Add A Toy</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="pictureUrl" className="block font-medium">
                        Picture URL:
                    </label>
                    <input
                        type="text"
                        name="pictureUrl"
                        className="w-full border-gray-300 input input-bordered rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border-gray-300 input input-bordered rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerName" className="block font-medium">
                        Seller Name:
                    </label>
                    <input
                        type="text"
                        name="sellerName"
                        className="w-full border-gray-300 input input-bordered rounded-md p-2"
                        defaultValue={user?.displayName}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="block font-medium">
                        Seller Email:
                    </label>
                    <input
                        type="email"
                        name="sellerEmail"
                        className="w-full border-gray-300 input input-bordered rounded-md p-2"
                        defaultValue={user?.email}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subCategory" className="block font-medium">
                        Sub-category:
                    </label>
                    <input
                        type="text"
                        name="subcategory"
                        className="w-full border-gray-300 input input-bordered rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block font-medium">
                        Price:
                    </label>
                    <input
                        type="text"
                        name="price"
                        className="w-full border-gray-300 input input-bordered rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block font-medium">
                        Rating:
                    </label>
                    <input
                        type="text"
                        name="rating"
                        className="w-full border-gray-300 input input-bordered rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="availableQuantity" className="block font-medium">
                        Available Quantity:
                    </label>
                    <input
                        type="text"
                        name="availableQuantity"
                        className="w-full border-gray-300 input input-bordered rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block font-medium">
                        Detail Description:
                    </label>
                    <textarea
                        name="description"
                        className="w-full border-gray-300 input input-bordered rounded-md p-2"
                        rows="4"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600"
                    >
                        Add Toy
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAToy;