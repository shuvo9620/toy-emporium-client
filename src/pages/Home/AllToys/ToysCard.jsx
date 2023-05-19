import { Link } from "react-router-dom";

const ToysCard = ({ toy }) => {
    const { name, sellerName, price, subcategory, availableQuantity, pictureUrl } = toy;

    console.log(pictureUrl);
    return (
        <div className="card w-96 bg-slate-300 shadow-xl">
            <figure className="px-10 pt-10">
                <img style={{ 'height': '50vh', 'width': '50vh' }} className="rounded-box" src={pictureUrl} alt="toy " />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="card-title">Seller Name: {sellerName}</h2>
                <h2 className="card-title">Subcategory: {subcategory}</h2>
                <h2 className="card-title">AvailableQuantity: {availableQuantity}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>

                
                    <Link className="text-center mt-4">
                        <button className="btn btn-active">View Details</button>
                    </Link>
                
            </div>
        </div>
    );
};

export default ToysCard;