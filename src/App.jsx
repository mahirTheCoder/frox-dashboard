import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements } from 'react-router'
import { Route } from 'react-router'
import Layout from './assets/Layout/Layout'
import Home from './Pages/Home'
import { RouterProvider } from 'react-router'
const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(


    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute} />

    </>
  )
}

export default App