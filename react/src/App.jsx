import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import './App.css'

import Counter from './MiniProjects/Counter'
import Cards from './MiniProjects/Components/Cards'
import BgChange from './MiniProjects/BgChange'
import PasswordGenerator from './MiniProjects/PasswordGenerator'
import CurrrencyConverter from './MiniProjects/CurrrencyConverter'

import Layout from './RouterExample/Components/Layout'
import Home from './RouterExample/Components/Home'
import About from './RouterExample/Components/About'
import Contact from './RouterExample/Components/Contact'
import User from './RouterExample/Components/User'
import Github from './RouterExample/Components/Github'
import { githubInfoLoader } from './RouterExample/Components/GithubInfoLoader'

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
        {
          path: '/user/:id',
          element: <User />
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
      {/* <Counter/> */}
      {/* <Cards username="Aman" btnText="click me"/>
      <Cards username="Alvish" btnText="click here"/> */}
      {/* <BgChange/> */}
      {/* <PasswordGenerator/> */}
      {/* < CurrrencyConverter /> */}

      <RouterProvider router={router} />
    </>
  )
}

export default App
