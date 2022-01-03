import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { auth, facebook } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const Auth = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '611632426718211',
        cookie: true,
        xfbml: true,
        version: 'v12.0',
      });

      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

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
