import logo from './logo.svg';
import './App.css';

import GoogleLoginBtn from './Oauth2/googleLoginBtn';
import NaverLoginBtn from './Oauth2/NaverLoginBtn';
import UserInfoBtn from './Oauth2/UserInfoBtn';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoogleLoginBtn></GoogleLoginBtn>
        <NaverLoginBtn></NaverLoginBtn>
        <UserInfoBtn></UserInfoBtn>
      </header>
    </div>
  );
}

export default App;
