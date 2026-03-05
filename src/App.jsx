import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Transaction from './components/Transaction'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Transaction />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App