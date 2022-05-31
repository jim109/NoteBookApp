
//import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

 export const PublicRoute = ({ isAuth, children }) =>{

    console.log("public children ", children)
    return isAuth ? <Navigate to="/" /> : children;
} ;

/* PublicRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    element: PropTypes.object.isRequired
} */