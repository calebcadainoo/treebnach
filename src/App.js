import logo from './logo.svg';
import './App.css';
import { auth, facebook } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const App = () => {
  const FacebookPopUpAuth = () => {
    console.log('hello');
    signInWithPopup(auth, facebook)
      .then((feedback) => {
        const user = feedback.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = facebook.credentialFromResult(feedback);
        const accessToken = credential.accessToken;

        console.log('USER: ', user);
        console.log('CREDENTIAL: ', credential);
        console.log('TOKEN: ', accessToken);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = facebook.credentialFromError(error);

        console.log('errorCode: ', errorCode);
        console.log('errorMessage: ', errorMessage);
        console.log('credential: ', credential);
        // ...
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <div onClick={() => FacebookPopUpAuth()} className="facebook">
            Facebook Login
          </div>
        </p>
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
  );
};

export default App;
