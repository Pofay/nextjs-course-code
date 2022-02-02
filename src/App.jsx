import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetupsPage'
import NewMeetup from './pages/NewMeetup'
import Favorites from './pages/Favorites'
import Layout from './components/layout/Layout'

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/new-meetup' element={<NewMeetup />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
