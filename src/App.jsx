import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage/HomePage'
import CoursePage from './pages/CoursePage/CoursePage'
import NotifPage from './pages/NotifPage/NotifPage'
import UserPage from './pages/UserPage/UserPage'

import NotFound from './pages/NotfoundPage/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/course'
            element={<CoursePage />}
          />
          <Route
            path='/notif'
            element={<NotifPage />}
          />
          <Route
            path='/user'
            element={<UserPage />}
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
