import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileMatch from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import FriendsContainer from './components/Friends/FriendsContainer'
import Header from './components/Header/Header';
import {Routes, Route} from "react-router-dom";

const App = (props) => {
  const WrongPage = () => {
    document.title = "Wrong Page"
    return (<div>smth wrong</div>)
  }

  return (
      <div className="app-wrapper">
          <Header />
          <div className="wrapper main-wrapper">
            <Navbar />
            <Routes>
              <Route path="/profile/*" element={<ProfileMatch/>}/>
              <Route path="/messages/*" element={<MessagesContainer/>}/>
              <Route path="/friends/*" element={<FriendsContainer/>}/>
              <Route path="*" element={<WrongPage/>}/>
            </Routes>
          </div>
      </div>
  );
}

export default App;