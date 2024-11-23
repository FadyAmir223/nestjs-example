import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout.component'

const Personal = lazy(() => import('./pages/Personal.page'))
const Financial = lazy(() => import('./pages/Financial.page'))

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Personal />} />
        <Route path='financial-info' element={<Financial />} />
      </Route>
    </Routes>
  )
}
