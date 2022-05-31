import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


//import { BrowserRouter as  Route, BrowserRouter, Routes } from "react-router-dom";
import { login } from "../action/auth";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { startLoadingNOtes } from "../action/notes";


export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    
    const auth = getAuth();
    onAuthStateChanged(auth, async user => {
      
      if ( user?.uid ){
        dispatch(login( user.uid, user.displayName));
        setIsLoggedIn( true )

        dispatch( startLoadingNOtes( user.uid ));

      }else {
        setIsLoggedIn(false)
      }
      setChecking(false);

    })
    
  }, [dispatch, setChecking, setIsLoggedIn])

  if ( checking ){
    return(
      <h1>Wait ....</h1>
    )
  }

  return (
    <BrowserRouter>
            <Routes>
              <Route path="/*" element={<PublicRoute isAuth={isLoggedIn}> <AuthRouter /></PublicRoute>} />
              <Route path="/" element={<PrivateRoute isAuth={isLoggedIn}> <JournalScreen /></PrivateRoute>} />
              {/* <Redirect to="/auth/login" /> */}
            </Routes>
    </BrowserRouter>
    
          
        
    
  )
}
