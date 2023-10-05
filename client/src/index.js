import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router =  createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      }
    ]
  }
])
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );


