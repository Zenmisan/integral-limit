import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './pages/LandingPage.tsx'

// Assuming the theming hook was created in src/hooks/useTimeTheme.ts
import { useTimeTheme } from './hooks/useTimeTheme' 

export function AppWrapper() {
  useTimeTheme(); // Call the theme hook to manage time-based mode switching

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Additional routes can be added here */}
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)