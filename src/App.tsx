import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  // Can add state here if needed for the app
  return (
    <div className="App">
      <Header name="Praise Oladejo" title="Mobile App Developer" />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App