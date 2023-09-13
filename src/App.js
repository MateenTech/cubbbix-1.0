import './globals.css';
// import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Services } from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { ContextProvider } from './apis/ContextApi';
import { useEffect } from 'react';

// <Routes>
//   <Route path='/' element={ <Hero /> } />
//   <Route path='/about' element={ <About /> } />
//   <Route path='/services' element={ <Services /> } />
//   <Route path='/portfolio' element={ <Portfolio /> } />
//   <Route path='/contact-us' element={ <Contact /> } />
// </Routes>
function App() {

  useEffect(() => {
    document.title = "Cubbbix"
  })

  return (
    <div className='app overflow-x-hidden'>
      <ContextProvider>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </ContextProvider>
    </div>
  )
}

export default App;