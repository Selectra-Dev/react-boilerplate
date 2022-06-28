import React, { Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const App = React.lazy(() => import('@root/App'))

const suspense = (component) => (
  <Suspense fallback='loading'>{component}</Suspense>
)

const CustomRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/' element={suspense(<App />)}
      />
    </Routes>
  </BrowserRouter>
)

export default CustomRoutes
