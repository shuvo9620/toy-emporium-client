import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {

    const toyDetails = useLoaderData();
    const { pictureUrl, name, sellerName, sellerEmail, price, rating, availableQuantity, description } = toyDetails;
    console.log(toyDetails);
    return (
        <div>
            {
                <div className="card w-96 bg-base-100 shadow-xl w-full">
                    <figure className="px-10 pt-10">
                        <img style={{height: '40vh'}} src={pictureUrl} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold"> <span className="text-emerald-600">Toy Name:</span> {name}</h2>
                        <p className="font-bold"> <span className="text-emerald-600">Seller Name:</span> {sellerName}</p>
                        <p className="font-bold"> <span className="text-emerald-600">Seller Email:</span> {sellerEmail}</p>
                        <p className="text-xl font-bold text-orange-500">Price: ${price}</p>
                        <p className="font-bold"> <span className="text-emerald-600">Rating:</span> {rating}</p>
                        <p className="font-bold"><span className="text-emerald-600">Available Quantity:</span> {availableQuantity}</p>
                        <p className="font-semibold w-1/2"><span className="text-emerald-600 font-bold">Description:</span> {description}</p>

                        <div className="card-actions">
                            <button className="btn btn-active mt-4">Buy Now</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ToyDetails;