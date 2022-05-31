
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ isAuth, children }) =>{
    console.log("private children",children)
   
    return isAuth ? children : <Navigate to ="/auth/login" />;
       
}

/* PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    element: PropTypes.object.isRequired
} */