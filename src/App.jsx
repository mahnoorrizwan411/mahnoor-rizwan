import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
// import CherrishCaseStudy from './components/case-studies/CherrishCaseStudy'
// import CatalystCaseStudy from './components/case-studies/CatalystCaseStudy'
import WhileCaseStudy from './components/case-studies/WhileCaseStudy'
// import ProgressionProductCaseStudy from './components/case-studies/ProgressionProductCaseStudy'

function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/cherrish" element={<CherrishCaseStudy />} />
        <Route path="/case-study/catalyst" element={<CatalystCaseStudy />} />
        <Route path="/case-study/while" element={<WhileCaseStudy />} />
        <Route path="/case-study/progression-product" element={<ProgressionProductCaseStudy />} />
      </Routes>
    </Router>
  )
}

export default App

