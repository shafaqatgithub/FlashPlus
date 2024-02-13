import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Dals from './components/Dals/Dals'
import Masalas from './components/Masalas/Masalas'
import Oils from './components/Oils/Oils'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import AddToCart from './components/AddToCart/AddToCart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "Dals",
        element: <Dals />
      },
      {
        path: "Masalas",
        element: <Masalas />
      },
      {
        path: "Oils",
        element: <Oils />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "AddToCart/:prodid",
        element: <AddToCart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
