import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import counterReducer from './features/user';

const store = configureStore({
  reducer: {
    user: counterReducer,
  }
})

// const MainComponent: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// }


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export type RootState = ReturnType<typeof store.getState>