import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayState from './Container/hof'
import DataFilter from './Container/filters'
import Total from './Container/reduce'
function App() {

  return (
    <>
 <DisplayState />
 <DataFilter/>
 
    </>
  )
}

export default App
