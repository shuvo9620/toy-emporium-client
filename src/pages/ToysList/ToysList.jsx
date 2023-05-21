import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ToysList = () => {
    const [searchDoll, setSearchDoll] = useState('');
    const [allToy, setAllToy] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch('https://toy-emporium-server-ten.vercel.app/allToy?limit=20')
            .then(res => res.json())
            .then(data => {
                setAllToy(data);
            });
    }, []);

    const handleSearch = () => {
        fetch(`https://toy-emporium-server-ten.vercel.app/searchToy/${searchDoll}`)
            .then(res => res.json())
            .then(data => {
                setAllToy(data);
            });
    };

    const toysToShow = searchResults.length > 0 ? searchResults : allToy;

    return (
        <div className="overflow-x-auto w-full mt-6 mb-6">
            <form className="flex w-52 items-center mx-auto mb-8 border-gray-300 input input-bordered rounded-md p-2">
                <input
                    onChange={event => setSearchDoll(event.target.value)}
                    type="text"
                    placeholder="Search by Name"
                    className="p-1"
                />
                <button className="btn btn-secondary ml-6" onClick={handleSearch}>
                    Search
                </button>
            </form>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th className="text-left">Toys Image</th>
                        <th className="text-left">Toys Name</th>
                        <th className="text-left">Seller Name</th>
                        <th className="text-left">Sub Category</th>
                        <th className="text-left">Price</th>
                        <th className="text-left">Available Quantity</th>
                        <th className="text-left">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {toysToShow.map(toy => (
                        <tr key={toy._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={toy.pictureUrl} alt="Toy" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{toy.name}</td>
                            <td>{toy.sellerName}</td>
                            <td>{toy.subcategory}</td>
                            <td>${toy.price}</td>
                            <td>{toy.availableQuantity}</td>
                            <td>
                                <Link className="btn btn-active" to={`/toydetails/${toy._id}`}>
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToysList;
