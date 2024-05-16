import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Menubar from './components/Menubar'
import Herosection from './components/Herosection'
import Items from './components/Items'
import Course from './components/Course'
import Sale from './components/Sale'
import Work from './components/Work'
import Companies from './components/Companies'
import Certificate from './components/Certificate'
import Bundle from './components/Bundle'

function App() {
  return (
    <>
      <Navbar />
      <Menubar />
      <Herosection />
      <Items />
      <Course />
      <Sale />
      <Work />
      <Companies />
      <Certificate />
      <Bundle />
    </>
  )
}

export default App