import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ToysList from "../pages/ToysList/ToysList";
import ToyDetails from "../pages/ToysList/ToyDetails/ToyDetails";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'registration',
            element: <Registration></Registration>
        },
        {
          path: '/toylist',
          element:<ToysList></ToysList>,
          // loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: 'toydetails/:id',
          element: <ToyDetails></ToyDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`)
        },
        {
          path: 'addatoy',
          element: <AddAToy></AddAToy>
        },
        {
          path:'myToys',
          element:<MyToys></MyToys>
        }
      ]
    },
  ]);

  export default router;