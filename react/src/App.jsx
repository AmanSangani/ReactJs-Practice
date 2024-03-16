import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import './App.css'

import Counter from './MiniProjects/Counter'
import Cards from './MiniProjects/Components/Cards'
import BgChange from './MiniProjects/BgChange'
import PasswordGenerator from './MiniProjects/PasswordGenerator'
import CurrrencyConverter from './MiniProjects/CurrrencyConverter'

import Layout from './RouterExample/Components/Layout'
import Layout2 from './RouterExample/Components/Layout2'
import Home from './RouterExample/Components/Home'
import About from './RouterExample/Components/About'
import Contact from './RouterExample/Components/Contact'
import User from './RouterExample/Components/User'
import Github from './RouterExample/Components/Github'
import { githubInfoLoader } from './RouterExample/Components/GithubInfoLoader'
import Layout3 from './MiniProjects/Layout3'
// import UserContextProvider from './MiniProjects/context/UserContextProvider'
// import Login from './MiniProjects/Components/Login'
// import Profile from './MiniProjects/Components/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        // {
        //   path: '/user/:id',
        //   element: <User />,
        // },
        {
          path: '/user',
          element: <Layout2 />,
          children: [
            {
              path: '',
              element: <User />
            },
            {
              path: 'counter',
              element: <Counter />
            },
            {
              path: 'cards',
              element: <Cards />
            },
            {
              path: 'bgChange',
              element: <BgChange />
            },
            {
              path: 'password',
              element: <PasswordGenerator />
            },
            {
              path: 'currencyconverter',
              element: <CurrrencyConverter />
            },
            {
              path: 'contextApi',
              element: <Layout3 />
            }
          ]
        },
        {
          loader: githubInfoLoader,
          path: '/github',
          element: <Github />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />

      {/* <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider> */}
    </>
  )
}

export default App
