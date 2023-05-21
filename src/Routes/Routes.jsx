import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ToysList from "../pages/ToysList/ToysList";
import ToyDetails from "../pages/ToysList/ToyDetails/ToyDetails";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Blogs/Blogs";

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
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`)
        },
        {
          path: 'addatoy',
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path:'myToys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        }
      ]
    },
  ]);

  export default router;