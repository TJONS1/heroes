import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Weather from './views/Weather/Weather.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path: "/weather",
    element: <Weather />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
