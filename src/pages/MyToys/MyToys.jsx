import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import UpdateMyToy from './UpdateMyToy';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [modalShow, setModalShow] = useState({});
  const [control, setControl] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortByPrice, setSortByPrice] = useState("price");

  const handleSortOrder = (field) => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    setSortByPrice(field);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/my_toy/${user?.email}?sortOrder=${sortOrder}&sortBy=${sortByPrice}`)
      .then(res => res.json())
      .then(data => {
        data.forEach(toy => {
          toy.price = parseInt(toy.price);
        });
        setMyToys(data);
      });
  }, [user, sortOrder, sortByPrice, control]);

 

  const handleDeleteToy = (id) => {
    const confirm = window.confirm('Are you sure you want to delete?');
    if (confirm) {
      fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('Delete successfully');
            const remainingData = myToys.filter(myToy => myToy._id !== id);
            setMyToys(remainingData);
          }
        });
    }
  };

  const handleEditButtonClick = (toyId) => {
    setModalShow(prevState => ({
      ...prevState,
      [toyId]: true,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-center text-xl font-bold mb-4">MY Own Toys</h3>
      <div className="mb-4">
        <button
          onClick={() => handleSortOrder("price")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Seller</th>
            <th className="py-2 px-4 border-b">Toy Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Sub-category</th>
            <th className="py-2 px-4 border-b">View Details</th>
            <th className="py-2 px-4 border-b">Update</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toy, index) => (
            <tr key={toy._id}>
              <td className="py-2 text-center px-4 border-b">{toy.sellerName}</td>
              <td className="py-2 text-center px-4 border-b">{toy.name}</td>
              <td className="py-2 text-center px-4 border-b">{toy.price}</td>
              <td className="py-2 text-center px-4 border-b">{toy.availableQuantity}</td>
              <td className="py-2 text-center px-4 border-b">{toy.subCategory}</td>
              <td className="py-2 text-center px-4 border-b"> 
                <Link className="text-blue-500 hover:underline" to={`/toydetails/${toy._id}`}>
                  View
                </Link>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEditButtonClick(toy._id)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <UpdateMyToy
                  show={modalShow[toy._id] || false}
                  onHide={() =>
                    setModalShow(prevState => ({
                      ...prevState,
                      [toy._id]: false,
                    }))
                  }
                  toy={toy}
                  handleUpdateToy={handleUpdateToy}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDeleteToy(toy._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
