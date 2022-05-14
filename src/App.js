import React, {lazy, Suspense} from 'react';
import './App.css';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import {BrowserRouter, HashRouter, Routes, Route} from 'react-router-dom';
import {initializeAppThunkCreator} from './redux/app-reducer';
import {connect} from 'react-redux';
import Preloader from './components/common/Preloader';

import {Provider} from 'react-redux';
import store from './redux/redux-store';

const ProfileMatch = lazy(() => import('./components/Profile/ProfileContainer'));
const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'));
const FriendsContainer = lazy(() => import('./components/Friends/FriendsContainer'));
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  
  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    
    return(
      <div className="app-wrapper">
          <HeaderContainer />
          <div className="wrapper main-wrapper">
            <Navbar userId={this.props.userId}/>
            <Suspense fallback={<Preloader/>}>
              <Routes>
                <Route path="/profile/*" element={<ProfileMatch/>}/>
                <Route path="/messages/*" element={<MessagesContainer/>}/>
                <Route path="/friends/*" element={<FriendsContainer/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="*" element={<WrongPage/>}/>
              </Routes>
            </Suspense>
          </div>
      </div>
    )
  }
}

const WrongPage = () => {
  document.title = "Wrong Page"
  return (<div>smth wrong</div>)
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      initializeApp: () => {
          dispatch(initializeAppThunkCreator())
      }
  }
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

let SocialNet = (props) => {
  return (
    <HashRouter> 
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default SocialNet;