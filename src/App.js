import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import Header from './components/Header/Header';
import {Routes, Route} from "react-router-dom";

const App = (props) => {
  return (
      <div className="app-wrapper">
          <Header />
          <div className="wrapper main-wrapper">
            <Navbar />
            <Routes>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/messages/*" element={<MessagesContainer/>}/>
              <Route path="*" element={<div>smth wrong</div>}/>
            </Routes>
          </div>
      </div>
  );
}

export default App;