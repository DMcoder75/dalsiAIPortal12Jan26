import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'

// Import page components
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import Sitemap from './pages/Sitemap'
import VerifyEmail from './pages/VerifyEmail'
import ApiDocs from './pages/ApiDocs'
import Careers from './pages/Careers'
import NewsUpdates from './pages/NewsUpdates'
import SupportCenter from './pages/SupportCenter'
import Documentation from './pages/Documentation'
import Community from './pages/Community'
import Partners from './pages/Partners'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/api-docs" element={<ApiDocs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news-updates" element={<NewsUpdates />} />
          <Route path="/support-center" element={<SupportCenter />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/community" element={<Community />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
