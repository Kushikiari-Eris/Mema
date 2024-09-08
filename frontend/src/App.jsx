import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import './index.css'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
