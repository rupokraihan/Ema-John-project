import React, { useContext, useState } from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';



const SignUp = () => {

  const [error, setError] = useState('');
  const { createUser } = useContext(AuthContext);



  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm)

    setError('');

     if (password.length < 8) {
       setError("password must be 8 characters or longer");
       return;
     }
    
    else if (password !== confirm) {
      setError('your password did not match')
      return
    }

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
    })
      .catch(error => {
        console.log(error);
        setError(error.message)
   })
  }


  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>

        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="confirm" required />
          </div>

          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>

        <p className='text-error'>{error}</p>
      </div>
    </div>
  );
};

export default SignUp;