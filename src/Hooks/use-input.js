import { useState } from 'react';

let passMessageError, emailMessageError;
const validationErrorMessage = (subject, value) => {
  switch (subject) {
    case 'EMAIL': {
      if (value.trim() === '') emailMessageError = "Email must not be empty ";
      else if (!value.trim().includes("@")) emailMessageError = "Email must contain '@' character "
      return emailMessageError;
    }
    case 'PASSWORD': {
      if (value.trim() === '') passMessageError = "Password must not be empty ";
      else if (value.length <= 5) passMessageError = "Password must contain >5 characters "
      return passMessageError;
    }
  }
}


const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [message, setMessage] = useState('');

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
    if (event.target.id === 'email') setMessage(validationErrorMessage('EMAIL',event.target.value));
   else if (event.target.id === 'password') setMessage(validationErrorMessage('PASSWORD',event.target.value));
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    message,
  };
};

export default useInput;