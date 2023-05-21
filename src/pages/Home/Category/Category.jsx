import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Category = () => {
    const [categoryOne, setCategoryOne] = useState([]);
    const [categoryTwo, setCategoryTwo] = useState([]);
    const [categoryThree, setCategoryThree] = useState([]);
    const [currentTab, setCurrentTab] = useState(0);

    const handleTab = (index) => {
        setCurrentTab(index);
    }

    useEffect(() => {
        fetch('https://toy-emporium-server-ten.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                const firstCategory = data.filter(first => first.subcategory === "baby doll")
                const secondCategory = data.filter(second => second.subcategory === "Dolls & Accessories")
                const thirdCategory = data.filter(third => third.subcategory === "Plush Toys")

                setCategoryOne(firstCategory)
                setCategoryTwo(secondCategory)
                setCategoryThree(thirdCategory)
            })
    }, []);

    return (
        <Tabs defaultIndex={1} onSelect={handleTab}>
            <h2 className="text-center font-bold text-4xl mb-4 mt-10">Sub Category</h2>
            <div>
                <div className="mb-4">
                    <TabList className="flex justify-center rounded">
                        <Tab className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:bg-gray-300">First Category</Tab>
                        <Tab className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:bg-gray-300">Second Category</Tab>
                        <Tab className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 focus:bg-gray-300">Third Category</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className="flex flex-wrap justify-center gap-8">
                        {categoryOne.map((category, index) => (
                            <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                                <figure>
                                    <img style={{ height: '50vh', width: '50vh' }} src={category.pictureUrl} alt={category.name} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {category.name}</h2>
                                    <p>Price: ${category.price}</p>
                                    <p>Rating: {category.rating}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/toydetails/${category._id}`}><button className="btn btn-primary">View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-wrap justify-center gap-8">
                        {categoryTwo.map((category, index) => (
                            <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                                <figure>
                                    <img src={category.pictureUrl} className="h-50vh w-50vh" alt={category.name} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {category.name}</h2>
                                    <p>Price: ${category.price}</p>
                                    <p>Rating: {category.rating}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/toydetails/${category._id}`}><button className="btn btn-primary">View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-wrap justify-center gap-8">
                        {categoryThree.map((category, index) => (
                            <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                                <figure>
                                    <img src={category.pictureUrl} className="h-50vh w-50vh" alt={category.name} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {category.name}</h2>
                                    <p>Price: ${category.price}</p>
                                    <p>Rating: {category.rating}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/toydetails/${category._id}`}><button className="btn btn-primary">View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default Category;
