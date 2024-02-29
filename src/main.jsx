import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import Teams from './components/Teams.jsx'
import TeamDetails from './components/TeamDetails.jsx'
import TeamsIndex from './components/TeamsIndex.jsx'
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
    loader: async () => {
      const teams = fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=French%20LNB`);
      return teams;
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/teams",
        element: <Teams />,
        
        children: [
          { index: true, element: <TeamsIndex />},
          {
            path: "/teams/:teamId",
            errorElement: <ErrorPage/>,
            element: <TeamDetails />,
            loader: ({params} ) => {
              return params.teamId
            }
          }
        ]
      }
    ],
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
