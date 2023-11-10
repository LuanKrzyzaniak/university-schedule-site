import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles.css';
import App from './components/App';
import Insertmajor from './components/Insertmajor';
import Insertccr from './components/Insertccr';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/insertmajor",
    element: <Insertmajor/>
  },
  {
    path: "/insertccr",
    element: <Insertccr/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

