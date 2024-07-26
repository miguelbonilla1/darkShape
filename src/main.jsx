import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Portafolio from './components/Portafolio.jsx'

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
  },
  {
      path: "/portafolio",
      element: <Portafolio />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);

