import logo from './logo.svg';
import './App.css';
import { auth, facebook } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const Auth = () => {
  const FacebookPopUpAuth = () => {
    console.log('hello');
    signInWithPopup(auth, facebook)
      .then((feedback) => {
        const user = feedback.user;
        console.log('USER: ', user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log('ERROR: ', error);
        // ...
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
              Facebook Login
            </div>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
};

export default Auth;
