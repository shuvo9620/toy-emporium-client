import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children;
    } else {
        Swal.fire('Please Log in first')
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>








};

export default PrivateRoute;