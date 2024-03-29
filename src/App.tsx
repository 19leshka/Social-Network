import * as React from 'react';
import {lazy, Suspense, useEffect} from 'react';
import './App.css';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import {BrowserRouter, HashRouter, Routes, Route} from 'react-router-dom';
import {initializeAppThunkCreator} from './redux/reducers/app-reducer';
import {connect, useDispatch, useSelector} from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';
import NotFound from './components/common/NotFound/NotFound';

import {Provider} from 'react-redux';
import store from './redux/redux-store';
import {useTypedSelector} from "./hooks/useTypedSelector";

const ProfileMatch = lazy(() => import('./components/Profile/ProfileContainer'));
const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'));
const FriendsContainer = lazy(() => import('./components/Friends/FriendsContainer'));
const NewsContainer = lazy(() => import('./components/News/NewsContainer'));

const App:React.FC = () => {
    const dispatch = useDispatch();
    const {initialized} = useTypedSelector(state => state.app);
    const {userId} = useTypedSelector(state => state.auth)

    useEffect(() => {
            dispatch(initializeAppThunkCreator())
    }, [])

    if(!initialized){
        return <Preloader/>
    }

    return(
        <div className="app-wrapper">
            <ScrollToTop/>
            <HeaderContainer />
            <div className="wrapper main-wrapper">
                <Navbar userId={userId}/>
                <Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path="/profile/*" element={<ProfileMatch/>}/>
                        <Route path="/news" element={<NewsContainer/>}/>
                        <Route path="/messages/*" element={<MessagesContainer/>}/>
                        <Route path="/friends/*" element={<FriendsContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    )
}

let SocialNet = (props) => {
  return (
    <HashRouter> 
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  )
}

export default SocialNet;