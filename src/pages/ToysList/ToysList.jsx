import { useLoaderData } from "react-router-dom";

const ToysList = () => {
    const toyData = useLoaderData();

    return (
        <div className="overflow-x-auto w-full mt-6 mb-6">
            <table className="table w-full">
                {/* head */}
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
                    {toyData.map(toy => (
                        <tr key={toy._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src= {toy.pictureUrl} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {toy.name}
                            </td>
                            <td>{toy.sellerName}</td>
                            <td>{toy.subcategory}</td>
                            <td>${toy.price}</td>
                            <td>{toy.availableQuantity}</td>

                            <td>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToysList;
