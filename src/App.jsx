import { Routes, Route } from 'react-router-dom'
import './App.css'
import { demoData } from './data/data'
import { missionsData } from './data/missions.js'
import { blogPostsData } from './data/blogData.js'
import { productsData } from './data/shopData.js'
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
import Homepage from './pages/main-pages/Homepage.jsx'
import MissionsPage from './pages/main-pages/MissionPage.jsx'
import BlogPage from './pages/main-pages/BlogPage.jsx'
import ShopPage from './pages/main-pages/ShopPage.jsx'
import ProfiloPage from './pages/main-pages/ProfiloPage.jsx'

function App() {
  return (
    <>
      <Header notifications={demoData.user.notifications} user={demoData.user} />

      <Routes>
        <Route path="/" element={<Homepage demoData={demoData} />} />
        <Route path="/missions" element={<MissionsPage missionsData={missionsData} />} />
        <Route path="/blog" element={<BlogPage blogPostsData={blogPostsData} />} />
        <Route path="/shop" element={<ShopPage productsData={productsData} availablePoints={demoData.user.points} userLevel={demoData.user.level} />} />
        <Route path="/profilo" element={<ProfiloPage user={demoData.user} recentBadges={demoData.recentBadges} redeemedProducts={demoData.redeemedProducts} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
