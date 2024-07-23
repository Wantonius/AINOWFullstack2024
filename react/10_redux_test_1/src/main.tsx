import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import countReducer,{State} from './reducers/countReducer';
import {Provider} from 'react-redux';
import {Store,PayloadAction,createStore} from 'redux';

const store:Store<State,PayloadAction> = createStore(countReducer);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)
