import logo from './logo.svg';
import './App.css';
import { auth, facebook } from './firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const Auth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [authText, setAuthText] = useState('Click to Login with Facebook Auth');

  const FacebookPopUpAuth = () => {
    console.log('hello');
    signInWithPopup(auth, facebook)
      .then((feedback) => {
        const user = feedback.user;
        setAuthText(user?.displayName);
        setIsAuth(true);
        console.log('USER: ', user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log('ERROR: ', error);
        // ...
      });
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert('You have been logged out');
        setIsAuth(false);
        setAuthText('Click to Login with Facebook Auth');
      })
      .catch((error) => {
        // An error happened.
        console.log('SIGN OUT ERROR: ', error);
      });
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            <div onClick={() => FacebookPopUpAuth()} className="facebook">
              {authText}
            </div>
          </div>
          <br />
          <br />
          <p>{isAuth && <button onClick={Logout}>Log Out</button>}</p>
        </header>
      </div>
    </>
  );
};

export default Auth;
