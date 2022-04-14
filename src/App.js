import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Navbar from './components/Navbar/Navbar';
import ProfileMatch from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Routes, Route} from 'react-router-dom';

const App = (props) => {
  const WrongPage = () => {
    document.title = "Wrong Page"
    return (<div>smth wrong</div>)
  }
  
  return (
      <div className="app-wrapper">
          <HeaderContainer />
          <div className="wrapper main-wrapper">
            <Navbar />
            <Routes>
              <Route path="/profile/*" element={<ProfileMatch/>}/>
              <Route path="/messages/*" element={<MessagesContainer/>}/>
              <Route path="/friends/*" element={<FriendsContainer/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="*" element={<WrongPage/>}/>
            </Routes>
          </div>
      </div>
  );
}

export default App;