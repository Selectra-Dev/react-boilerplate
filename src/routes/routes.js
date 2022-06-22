import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const App = React.lazy(() => import('../App'))

const CustomRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
)

export default CustomRoutes
