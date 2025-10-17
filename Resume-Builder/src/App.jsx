import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Preview from './pages/Preview'
import Layout from './pages/Layout'
import ResumeBuilder from './pages/ResumeBuilder'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='app' element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='builder/:resumeId' element={<ResumeBuilder/>} />
      </Route>
      <Route path='view/:resumeId' element={<Preview/>}/>
    </Routes>
    </>
  )
}

export default App