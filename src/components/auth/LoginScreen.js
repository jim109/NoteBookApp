import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { startGoogleLogin, startLoginEmailPassword } from '../../action/auth'
import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../../action/ui';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );

  const [formValues, handleInputChange] = useForm({
    email:'',
    password: ''
  });

  const { email, password } = formValues;

  const handleLogin = (e) =>{
    e.preventDefault();
    if (isLoginValid()){
      dispatch( startLoginEmailPassword(email, password) );
    }
    
  } 

  const isLoginValid = () =>{
    if( !validator.isEmail( email ) ){
      dispatch(setError('Email is not valid'))
      return false;
    }else if( password.length < 6 ){
      dispatch(setError('Password should be at least 7 characters and match each other'))
      return false;
    }
    dispatch( removeError() )
    return true;
    
  }

  const handleGoogleLogin = () =>{
    dispatch( startGoogleLogin() );
  }

  return (
    <>
        <h3 className='auth__title'>Login</h3>
        <form onSubmit={ handleLogin } className="animate__animated animate__fadeIn animate__faster">
          <input
            type='text'
            placeholder='Email'
            name='email'
            className='auth__input'
            autoComplete='off'
            value={ email }
            onChange={ handleInputChange }
            />
            <input 
              type='password'
              placeholder='Password'
              name='password'
              className='auth__input '
              value={ password }
              onChange={ handleInputChange }
            />
            <button
              type='submit'
              className='btn btn-primary btn-block'
              disabled={ loading }
            >Login
            </button>
            <hr />
            <div className='auth__social-networks'>
              <p>Login with social networks</p>
              <div 
                className="google-btn"
                onClick={ handleGoogleLogin }
                >
                <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
            </div>
            </div>
            <Link to='/auth/register' className='link'>
              Create a new account
            </Link>
        </form>
    </>
  )
} 
   