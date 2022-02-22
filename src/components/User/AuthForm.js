import { useState, useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import useInput from '../../Hooks/use-input';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';


const AuthForm = () => {

  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const {
    value: passValue,
    isValid: enteredPassIsValid,
    hasError: passInputHasError,
    valueChangeHandler: passChangedHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPassInput,
    message: messagePass,
  } = useInput((value) => (value.trim() !== '') && (value.length > 5));

  const {
    value: emailValue,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
    message: messageEmail,
  } = useInput((value) => (value.trim() !== '') && (value.trim().includes("@")));

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPassIsValid) {
    formIsValid = true;
  }

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
   
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
 
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJq9wVQtrGa7L7p3dbx4ZcovWsx-A24uk';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJq9wVQtrGa7L7p3dbx4ZcovWsx-A24uk';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate('/', { replace: true });

      })
      .catch((err) => {
        alert(err.message);
      });

      resetEmailInput();
      resetPassInput();
  };


  //just for css styling
  const emailInputClasses = emailInputHasError
    ? 'invalid'
    : 'control';
  const passInputClasses = passInputHasError
    ? 'invalid'
    : 'control';



  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div >
          <label  className={classes.labels} htmlFor='email'>Your Email</label>
          <input className={classes.emailInputClasses}
            type='email'
            id='email'
            required
            ref={emailInputRef}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {console.log({ 'emailInputHasError': emailInputHasError })}
          {console.log({ 'emailInputClasses': emailInputClasses })}
          {emailInputHasError && (<p className={classes['error-text']}>{messageEmail}</p>)}
        </div>
        <div className={classes.passInputClasses}>
          <label  className={classes.labels} htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
            onChange={passChangedHandler}
            onBlur={passBlurHandler}
            value={passValue}
          />
          {console.log({ 'passInputHasError': passInputHasError })}
          {console.log({ 'passInputClasses': passInputClasses })}
          {passInputHasError && (<p className={classes['error-text']}>{messagePass}</p>)}
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
