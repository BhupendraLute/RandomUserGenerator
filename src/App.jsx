import { useState } from 'react'
import './App.css'
import { Header, Footer } from './Components'
import {Outlet} from "react-router-dom"

function App() {

  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
