import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import ContactUs from './pages/ContactUs'

// ✅ Import your quiz pages
import Quiz10 from './pages/Quiz10Page'
import Quiz12 from './pages/Quiz12Page'
import CareerPage from "./CareerPage";
import MentalHealthSection from './components/mentalHealthSection'

// import Quiz10Page from './pages/Quiz10Page'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/mental-health" element={<MentalHealthSection />} />
          {/* ✅ New quiz routes */}
          <Route path="/quiz-10" element={<Quiz10 />} />
          <Route path="/quiz-12" element={<Quiz12 />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  )
}

export default App
