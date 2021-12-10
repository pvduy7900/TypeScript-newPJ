import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { renderPublicRoutes } from './router/routeElements'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {renderPublicRoutes()}
      </Routes>
    </BrowserRouter >
  )
}

export default App
