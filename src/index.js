import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
          <App appState={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
      document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});