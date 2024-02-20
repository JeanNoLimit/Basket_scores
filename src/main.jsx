import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Teams from './components/Teams.jsx'
import ErrorPage from './error-page.jsx'
import NavBar from './components/NavBar.jsx'
import './styles/index.css'
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/teams",
        element: <Teams />
      }
    ],
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
