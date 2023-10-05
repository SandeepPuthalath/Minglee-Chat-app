import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import HomePage from './pages/HomePage';
import store from './redux/app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


