import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Psychotherapy from './Component/Pages/Psychotherapists.jsx';
import Physiotherapy from './Component/Pages/Physiotherapists.jsx';
import Acupuncture from './Component/Pages/Acupuncturists.jsx';
import Contactus from './Component/Pages/Contactus.jsx';
import { Daskboard } from './Component/Deskboard/Maindaskboard.jsx';
import { Psychotherapistsoverview } from './Component/Deskboard/Psychotherapistsoverview.jsx';
import { Physiotherapistsoverview  } from './Component/Deskboard/Physiotherapistsoverview.jsx';
import { Acupuncturistsoverview } from './Component/Deskboard/Acupuncturistsoverview.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Psychotherapy",
    element: <Psychotherapy/>,
  },
  {
    path: "/Physiotherapy",
    element: <Physiotherapy/>,
  }, {
    path: "/Acupuncture",
    element: <Acupuncture/>,
  },

  {
    path: "/Contactus",
    element: <Contactus/>,
  },
  {
    path: "/Daskboard",
    element: <Daskboard/>,
  },
  {
    path: "/Psychotherapistsoverview",
    element: <Psychotherapistsoverview/>,
  },
  {
    path: "/Physiotherapistsoverview",
    element: <Physiotherapistsoverview/>,
  },
  {
    path: "/Acupuncturistsoverview",
    element: <Acupuncturistsoverview/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
