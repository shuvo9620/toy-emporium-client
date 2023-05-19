import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";


const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

    return (
        <div className="mt-4">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-3 mt-16 text-orange-500">Discover the Magic: All Toys, One Emporium!</h2>
                <p className="font-semibold">Discover endless joy and imagination at Toy Emporium. <br /> We offer a curated selection of high-quality toys for all ages. <br /> Find the perfect playmate today!</p>
            </div>
            <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-box gap-6 mb-6">
                {
                    toys.map(toy => <ToysCard
                        key={toy._id}
                        toy={toy}
                    ></ToysCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;