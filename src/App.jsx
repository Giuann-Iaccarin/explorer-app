import { Routes, Route } from 'react-router-dom'
import './App.css'
import { demoData } from './data/data'
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
import Homepage from './pages/main-pages/Homepage.jsx'

function App() {
  return (
    <>
      <Header notifications={demoData.user.notifications} />

      <Routes>
        <Route path="/" element={<Homepage demoData={demoData} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
