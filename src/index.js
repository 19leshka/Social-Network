import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from './StoreContext'

const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});