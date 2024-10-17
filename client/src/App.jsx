import React from 'react'
import { Routes, Route } from "react-router-dom"
import { SocketProvider } from './providers/Socket'
import Home from './pages/Home'

const App = () => {
    return (
      <div>
        <Routes>
          <SocketProvider>
            <Route path='/' element={<Home/>}/>
          </SocketProvider>
        </Routes>
      </div>
    )
}

export default App